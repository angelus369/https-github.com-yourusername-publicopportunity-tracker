/**
 * AEO Clarify — DOM Audit Tool
 * Tests a client website for Manus AI machine interactivity readiness.
 * Run: node dom-audit.js <url>
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

const TARGET_URL = process.argv[2];

if (!TARGET_URL) {
  console.error('Usage: node dom-audit.js <url>');
  process.exit(1);
}

function fetchHTML(targetUrl) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(targetUrl, { headers: { 'User-Agent': 'AEOClarify-DOMaudit/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function auditDOM(html, url) {
  const results = {
    url,
    timestamp: new Date().toISOString(),
    score: 0,
    maxScore: 0,
    checks: []
  };

  function check(name, passed, detail, weight = 1) {
    results.maxScore += weight;
    if (passed) results.score += weight;
    results.checks.push({
      name,
      passed,
      detail,
      weight
    });
  }

  // 1. Semantic buttons
  const buttonMatches = html.match(/<button[^>]*>/gi) || [];
  const labeledButtons = buttonMatches.filter(b => /id=|aria-label=|name=/i.test(b));
  const anonButtons = buttonMatches.length - labeledButtons.length;
  check(
    'Semantic Button Labels',
    anonButtons === 0,
    `${labeledButtons.length} labeled, ${anonButtons} anonymous buttons found`,
    2
  );

  // 2. Form inputs labeled
  const inputMatches = html.match(/<input[^>]*>/gi) || [];
  const labeledInputs = inputMatches.filter(i => /id=|name=|aria-label=|placeholder=/i.test(i));
  const anonInputs = inputMatches.length - labeledInputs.length;
  check(
    'Form Input Labels',
    anonInputs === 0,
    `${labeledInputs.length} labeled, ${anonInputs} anonymous inputs found`,
    2
  );

  // 3. CTA links have descriptive text
  const linkMatches = html.match(/<a[^>]*>.*?<\/a>/gis) || [];
  const vagueLinks = linkMatches.filter(l => />(click here|here|learn more|read more)<\/a>/i.test(l));
  check(
    'Descriptive CTA Links',
    vagueLinks.length === 0,
    vagueLinks.length > 0 ? `${vagueLinks.length} vague link(s) found: ${vagueLinks.slice(0,2).join(', ')}` : 'All links are descriptive',
    1
  );

  // 4. No anonymous div buttons
  const divButtons = (html.match(/<div[^>]*(onclick|role="button")[^>]*>/gi) || []).length;
  check(
    'No Div-Based Buttons',
    divButtons === 0,
    divButtons > 0 ? `${divButtons} div element(s) acting as buttons — replace with <button>` : 'No div buttons found',
    2
  );

  // 5. Pricing visible (not gated)
  const hasPricing = /pricing|price|\$[0-9]|per month|\/mo/i.test(html);
  const hasContactSales = /contact sales|book a demo|request a quote|talk to us/i.test(html);
  check(
    'Transparent Pricing',
    hasPricing && !hasContactSales,
    hasPricing
      ? (hasContactSales ? 'Pricing found but gated behind contact form — agents cannot transact' : 'Transparent pricing detected')
      : 'No pricing found — invisible to autonomous buying agents',
    3
  );

  // 6. Self-serve signup
  const hasSelfServe = /sign up|get started|free trial|create account|start free/i.test(html);
  check(
    'Self-Serve Account Creation',
    hasSelfServe,
    hasSelfServe ? 'Self-serve signup path detected' : 'No self-serve signup — agents cannot onboard autonomously',
    2
  );

  // 7. Form elements use native HTML
  const formCount = (html.match(/<form[^>]*>/gi) || []).length;
  check(
    'Native HTML Forms',
    formCount > 0,
    formCount > 0 ? `${formCount} native <form> element(s) found` : 'No native form elements — may block agent form completion',
    1
  );

  // 8. Page loads without JS dependency hint (SSR check)
  const hasNoScript = /<noscript>/i.test(html);
  const hasBodyContent = (html.match(/<p[^>]*>[\s\S]{50,}<\/p>/gi) || []).length > 3;
  check(
    'Server-Side Rendered Content',
    hasBodyContent,
    hasBodyContent ? 'Sufficient HTML content detected without JS execution' : 'Page may rely on client-side JS — AI bots may see blank page',
    2
  );

  return results;
}

function printReport(results) {
  const pct = Math.round((results.score / results.maxScore) * 100);
  let grade = 'FAILING';
  if (pct >= 90) grade = 'MOAT STATUS';
  else if (pct >= 70) grade = 'GOOD';
  else if (pct >= 50) grade = 'FRAGMENTED';
  else grade = 'INVISIBLE TO AGENTS';

  console.log('\n========================================');
  console.log('  AEO CLARIFY — DOM AUDIT REPORT');
  console.log('========================================');
  console.log(`  URL:       ${results.url}`);
  console.log(`  Date:      ${results.timestamp}`);
  console.log(`  Score:     ${results.score}/${results.maxScore} (${pct}%)`);
  console.log(`  Grade:     ${grade}`);
  console.log('========================================\n');

  results.checks.forEach(c => {
    const icon = c.passed ? '✅' : '❌';
    console.log(`${icon}  ${c.name}`);
    console.log(`     ${c.detail}`);
    console.log(`     Weight: ${c.weight} point(s)\n`);
  });

  console.log('========================================');
  console.log('  MANUS AI READINESS SUMMARY');
  console.log('========================================');
  const failed = results.checks.filter(c => !c.passed);
  if (failed.length === 0) {
    console.log('  This site is fully agent-ready.');
  } else {
    console.log(`  ${failed.length} issue(s) blocking autonomous agent interaction:\n`);
    failed.forEach(f => console.log(`  → Fix: ${f.name} — ${f.detail}`));
  }
  console.log('========================================\n');
}

async function run() {
  console.log(`\nAuditng: ${TARGET_URL}`);
  console.log('Fetching page...');
  try {
    const html = await fetchHTML(TARGET_URL);
    const results = auditDOM(html, TARGET_URL);
    printReport(results);
  } catch (err) {
    console.error('Error fetching URL:', err.message);
    process.exit(1);
  }
}

run();
