/**
 * AEO Clarify — robots.txt Auditor
 * Checks if all major AI crawlers have access to the client's site.
 * Run: node robots-auditor.js <url>
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

const TARGET_URL = process.argv[2];

if (!TARGET_URL) {
  console.error('Usage: node robots-auditor.js <url>');
  process.exit(1);
}

// All major AI crawlers we care about
const AI_BOTS = [
  { name: 'ChatGPT',     engine: 'ChatGPT',     agent: 'GPTBot' },
  { name: 'ChatGPT Browse', engine: 'ChatGPT',  agent: 'ChatGPT-User' },
  { name: 'Perplexity',  engine: 'Perplexity',  agent: 'PerplexityBot' },
  { name: 'Google',      engine: 'Gemini',       agent: 'Googlebot' },
  { name: 'Google Extended', engine: 'Gemini',   agent: 'Google-Extended' },
  { name: 'Claude',      engine: 'Claude',       agent: 'anthropic-ai' },
  { name: 'Claude Control', engine: 'Claude',    agent: 'ClaudeBot' },
  { name: 'Grok / X',   engine: 'Grok',         agent: 'Twitterbot' },
  { name: 'Meta AI',     engine: 'Meta',         agent: 'facebookexternalhit' },
  { name: 'Bing / Copilot', engine: 'Copilot',  agent: 'bingbot' },
  { name: 'Common Crawl', engine: 'Training Data', agent: 'CCBot' },
];

function fetchRobots(targetUrl) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(targetUrl);
    const robotsUrl = `${parsed.protocol}//${parsed.host}/robots.txt`;
    const client = parsed.protocol === 'https:' ? https : http;
    console.log(`Fetching: ${robotsUrl}`);
    client.get(robotsUrl, { headers: { 'User-Agent': 'AEOClarify-RobotsAuditor/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ content: data, status: res.statusCode, robotsUrl }));
    }).on('error', reject);
  });
}

function parseRobots(content) {
  const rules = {};
  let currentAgents = [];

  content.split('\n').forEach(line => {
    line = line.trim();
    if (!line || line.startsWith('#')) return;

    if (line.toLowerCase().startsWith('user-agent:')) {
      const agent = line.split(':')[1].trim();
      if (agent === '*') {
        currentAgents = ['*'];
      } else {
        currentAgents = [agent.toLowerCase()];
      }
    } else if (line.toLowerCase().startsWith('disallow:')) {
      const path = line.split(':').slice(1).join(':').trim();
      currentAgents.forEach(agent => {
        if (!rules[agent]) rules[agent] = { disallow: [], allow: [] };
        rules[agent].disallow.push(path);
      });
    } else if (line.toLowerCase().startsWith('allow:')) {
      const path = line.split(':').slice(1).join(':').trim();
      currentAgents.forEach(agent => {
        if (!rules[agent]) rules[agent] = { disallow: [], allow: [] };
        rules[agent].allow.push(path);
      });
    }
  });

  return rules;
}

function isBotBlocked(agentName, rules) {
  const agentLower = agentName.toLowerCase();

  // Check specific agent rule
  const specificRule = rules[agentLower];
  if (specificRule) {
    const blocked = specificRule.disallow.some(path => path === '/' || path === '');
    const allowed = specificRule.allow.some(path => path === '/');
    if (allowed) return false;
    if (blocked) return true;
  }

  // Fall back to wildcard
  const wildcardRule = rules['*'];
  if (wildcardRule) {
    const blocked = wildcardRule.disallow.some(path => path === '/' || path === '');
    return blocked;
  }

  return false;
}

function hasSpecificRule(agentName, rules) {
  return !!rules[agentName.toLowerCase()];
}

function auditRobots(robotsContent, rules, url) {
  const results = {
    url,
    timestamp: new Date().toISOString(),
    score: 0,
    maxScore: 0,
    botResults: [],
    checks: []
  };

  function check(name, passed, detail, weight = 1) {
    results.maxScore += weight;
    if (passed) results.score += weight;
    results.checks.push({ name, passed, detail, weight });
  }

  // Check each AI bot
  AI_BOTS.forEach(bot => {
    const blocked = isBotBlocked(bot.agent, rules);
    const hasRule = hasSpecificRule(bot.agent, rules);
    results.botResults.push({
      name: bot.name,
      engine: bot.engine,
      agent: bot.agent,
      blocked,
      hasExplicitRule: hasRule,
      status: blocked ? 'BLOCKED' : (hasRule ? 'EXPLICITLY ALLOWED' : 'ALLOWED BY DEFAULT')
    });
  });

  // Score: critical AI bots unblocked
  const criticalBots = ['GPTBot', 'PerplexityBot', 'Googlebot', 'Google-Extended', 'anthropic-ai', 'ClaudeBot'];
  criticalBots.forEach(agent => {
    const bot = results.botResults.find(b => b.agent === agent);
    if (bot) {
      check(`${agent} Access`, !bot.blocked, bot.blocked ? `BLOCKED — ${agent} cannot crawl this site` : `Accessible`, 2);
    }
  });

  // Check sitemap
  const hasSitemap = /sitemap:/i.test(robotsContent);
  check('Sitemap Declared', hasSitemap, hasSitemap ? 'Sitemap URL found in robots.txt' : 'No sitemap declared — add Sitemap: https://yourdomain.com/sitemap.xml', 1);

  // Check crawl-delay
  const hasCrawlDelay = /crawl-delay:/i.test(robotsContent);
  check('No Excessive Crawl Delay', !hasCrawlDelay, hasCrawlDelay ? 'Crawl-delay found — may slow AI bot indexing' : 'No crawl-delay restrictions', 1);

  return results;
}

function printReport(results, robotsUrl, status) {
  const pct = Math.round((results.score / results.maxScore) * 100);
  let grade = 'INVISIBLE';
  if (pct >= 90) grade = 'FULLY OPEN';
  else if (pct >= 70) grade = 'MOSTLY OPEN';
  else if (pct >= 50) grade = 'PARTIALLY BLOCKED';
  else grade = 'CRITICALLY BLOCKED';

  console.log('\n========================================');
  console.log('  AEO CLARIFY — ROBOTS.TXT AUDITOR');
  console.log('========================================');
  console.log(`  URL:      ${results.url}`);
  console.log(`  Robots:   ${robotsUrl} (HTTP ${status})`);
  console.log(`  Date:     ${results.timestamp}`);
  console.log(`  Score:    ${results.score}/${results.maxScore} (${pct}%)`);
  console.log(`  Grade:    ${grade}`);
  console.log('========================================\n');

  console.log('  AI CRAWLER ACCESS STATUS:');
  console.log('  ─────────────────────────────────────');

  const engines = [...new Set(results.botResults.map(b => b.engine))];
  engines.forEach(engine => {
    const bots = results.botResults.filter(b => b.engine === engine);
    const allBlocked = bots.every(b => b.blocked);
    const someBlocked = bots.some(b => b.blocked);
    const icon = allBlocked ? '❌' : someBlocked ? '⚠️ ' : '✅';
    console.log(`\n  ${icon} ${engine}`);
    bots.forEach(b => {
      const statusIcon = b.blocked ? '  🚫' : '  ✓ ';
      console.log(`     ${statusIcon} ${b.agent}: ${b.status}`);
    });
  });

  console.log('\n========================================');
  console.log('  TECHNICAL CHECKS');
  console.log('========================================');
  results.checks.forEach(c => {
    const icon = c.passed ? '✅' : '❌';
    console.log(`${icon}  ${c.name}`);
    console.log(`     ${c.detail}\n`);
  });

  const blocked = results.botResults.filter(b => b.blocked);
  console.log('========================================');
  console.log('  ACTION ITEMS');
  console.log('========================================');
  if (blocked.length === 0) {
    console.log('  All AI crawlers have access. No action needed.');
  } else {
    console.log(`  ADD these lines to robots.txt to unblock ${blocked.length} AI crawler(s):\n`);
    blocked.forEach(b => {
      console.log(`  User-agent: ${b.agent}`);
      console.log(`  Allow: /\n`);
    });
  }
  console.log('========================================\n');
}

async function run() {
  console.log(`\nAuditing robots.txt for: ${TARGET_URL}`);
  try {
    const { content, status, robotsUrl } = await fetchRobots(TARGET_URL);
    const rules = parseRobots(content);
    const results = auditRobots(content, rules, TARGET_URL);
    printReport(results, robotsUrl, status);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

run();
