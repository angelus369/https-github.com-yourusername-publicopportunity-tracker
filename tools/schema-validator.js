/**
 * AEO Clarify — Schema Validator
 * Audits a client website for JSON-LD schema completeness and AEO readiness.
 * Run: node schema-validator.js <url>
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

const TARGET_URL = process.argv[2];

if (!TARGET_URL) {
  console.error('Usage: node schema-validator.js <url>');
  process.exit(1);
}

function fetchHTML(targetUrl) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(targetUrl, { headers: { 'User-Agent': 'AEOClarify-SchemaValidator/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractSchemas(html) {
  const schemas = [];
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      schemas.push(parsed);
    } catch (e) {
      schemas.push({ _parseError: true, raw: match[1].trim().slice(0, 100) });
    }
  }
  return schemas;
}

function flattenGraph(schemas) {
  const flat = [];
  schemas.forEach(s => {
    if (s['@graph']) {
      s['@graph'].forEach(item => flat.push(item));
    } else {
      flat.push(s);
    }
  });
  return flat;
}

function auditSchemas(schemas, url) {
  const flat = flattenGraph(schemas);
  const results = {
    url,
    timestamp: new Date().toISOString(),
    schemasFound: flat.length,
    parseErrors: schemas.filter(s => s._parseError).length,
    score: 0,
    maxScore: 0,
    checks: [],
    schemas: flat
  };

  function check(name, passed, detail, weight = 1) {
    results.maxScore += weight;
    if (passed) results.score += weight;
    results.checks.push({ name, passed, detail, weight });
  }

  const types = flat.map(s => s['@type']).filter(Boolean).flat();

  // 1. Any schema present
  check('Schema Present', flat.length > 0, flat.length > 0 ? `${flat.length} schema block(s) found` : 'No JSON-LD schema found — AI cannot categorize this site', 3);

  // 2. Organization schema
  const org = flat.find(s => ['Organization', 'Corporation', 'LocalBusiness', 'ProfessionalService'].includes(s['@type']));
  check('Organization Schema', !!org, org ? `Found: ${org['@type']}` : 'Missing Organization schema — AI cannot verify entity identity', 3);

  if (org) {
    // 3. sameAs links
    const sameAs = org.sameAs || [];
    const hasSameAs = Array.isArray(sameAs) ? sameAs.length >= 2 : !!sameAs;
    check('sameAs Entity Links', hasSameAs, hasSameAs ? `sameAs links: ${JSON.stringify(sameAs).slice(0,100)}` : 'Missing sameAs — AI cannot cross-verify entity across Wikidata/LinkedIn/Crunchbase', 2);

    // 4. Name, URL, Description
    check('Organization Name', !!org.name, org.name ? `Name: "${org.name}"` : 'Missing organization name', 1);
    check('Organization URL', !!org.url, org.url ? `URL: ${org.url}` : 'Missing organization URL', 1);
    check('Organization Description', !!org.description, org.description ? `Description present (${org.description.length} chars)` : 'Missing description — add a clear entity description', 1);

    // 5. Contact info
    const hasContact = !!(org.telephone || org.email || org.contactPoint);
    check('Contact Information', hasContact, hasContact ? 'Contact info present' : 'Missing contact info — required for NAP consistency', 1);
  }

  // 6. FAQ schema
  const faq = flat.find(s => s['@type'] === 'FAQPage');
  check('FAQ Schema', !!faq, faq ? `FAQ schema found with ${(faq.mainEntity || []).length} Q&A pair(s)` : 'Missing FAQPage schema — add Answer-First Q&A blocks', 2);

  if (faq && faq.mainEntity) {
    const longAnswers = faq.mainEntity.filter(q => {
      const answer = q.acceptedAnswer?.text || '';
      return answer.length > 350;
    });
    check(
      'FAQ Answer Length (under 350 chars)',
      longAnswers.length === 0,
      longAnswers.length > 0
        ? `${longAnswers.length} answer(s) exceed 350 characters — shorten for AI chunk compatibility`
        : 'All FAQ answers are under 350 characters',
      1
    );
  }

  // 7. Product or Service schema
  const product = flat.find(s => ['Product', 'Service', 'SoftwareApplication', 'ProfessionalService'].includes(s['@type']));
  check('Product/Service Schema', !!product, product ? `Found: ${product['@type']}` : 'Missing Product or Service schema — AI cannot surface you in product queries', 2);

  if (product) {
    check('Offers/Pricing in Schema', !!(product.offers || product.priceRange), product.offers || product.priceRange ? 'Pricing data present in schema' : 'Missing offers/pricing — agents cannot retrieve pricing data programmatically', 2);
  }

  // 8. BreadcrumbList
  const breadcrumb = flat.find(s => s['@type'] === 'BreadcrumbList');
  check('Breadcrumb Schema', !!breadcrumb, breadcrumb ? 'Breadcrumb navigation schema present' : 'Missing BreadcrumbList — helps AI understand site structure', 1);

  // 9. Parse errors
  check('No Parse Errors', results.parseErrors === 0, results.parseErrors > 0 ? `${results.parseErrors} schema block(s) failed to parse — fix JSON syntax immediately` : 'All schema blocks parse cleanly', 3);

  return results;
}

function printReport(results) {
  const pct = Math.round((results.score / results.maxScore) * 100);
  let grade = 'INVISIBLE';
  if (pct >= 90) grade = 'MOAT STATUS';
  else if (pct >= 70) grade = 'GOOD';
  else if (pct >= 50) grade = 'FRAGMENTED';
  else grade = 'INVISIBLE';

  console.log('\n========================================');
  console.log('  AEO CLARIFY — SCHEMA VALIDATOR');
  console.log('========================================');
  console.log(`  URL:          ${results.url}`);
  console.log(`  Date:         ${results.timestamp}`);
  console.log(`  Schemas:      ${results.schemasFound} found`);
  console.log(`  Parse Errors: ${results.parseErrors}`);
  console.log(`  Score:        ${results.score}/${results.maxScore} (${pct}%)`);
  console.log(`  Grade:        ${grade}`);
  console.log('========================================\n');

  results.checks.forEach(c => {
    const icon = c.passed ? '✅' : '❌';
    console.log(`${icon}  ${c.name} (${c.weight}pt)`);
    console.log(`     ${c.detail}\n`);
  });

  const failed = results.checks.filter(c => !c.passed);
  console.log('========================================');
  console.log('  ACTION ITEMS');
  console.log('========================================');
  if (failed.length === 0) {
    console.log('  Schema is fully AEO-optimized.');
  } else {
    failed.forEach((f, i) => console.log(`  ${i + 1}. ${f.name}: ${f.detail}`));
  }
  console.log('========================================\n');
}

async function run() {
  console.log(`\nValidating schema: ${TARGET_URL}`);
  try {
    const html = await fetchHTML(TARGET_URL);
    const schemas = extractSchemas(html);
    const results = auditSchemas(schemas, TARGET_URL);
    printReport(results);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

run();
