/**
 * AEO Clarify — AI Share of Voice Tracker
 * Generates the exact prompts to run across all 6 AI engines
 * and records the results for baseline and progress tracking.
 *
 * Run: node sov-tracker.js
 * Or with a client config: node sov-tracker.js client-config.json
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Default config — override by passing a JSON file
const DEFAULT_CONFIG = {
  clientName: 'YOUR CLIENT BRAND',
  industry: 'YOUR INDUSTRY',
  targetAudience: 'YOUR TARGET AUDIENCE',
  useCase: 'YOUR PRIMARY USE CASE',
  competitors: ['COMPETITOR A', 'COMPETITOR B', 'COMPETITOR C'],
  auditDate: new Date().toISOString().split('T')[0]
};

const AI_ENGINES = [
  { name: 'ChatGPT',    url: 'https://chatgpt.com',        signal: 'Entity Clarity Signal' },
  { name: 'Perplexity', url: 'https://perplexity.ai',      signal: 'Citability Signal' },
  { name: 'Gemini',     url: 'https://gemini.google.com',  signal: 'Google Ecosystem Signal' },
  { name: 'Claude',     url: 'https://claude.ai',          signal: 'Depth Signal' },
  { name: 'Grok',       url: 'https://x.com/i/grok',       signal: 'Real-Time Citation Signal' },
  { name: 'Manus AI',   url: 'https://manus.im',           signal: 'Machine Interactivity Signal' },
];

function buildPrompts(config) {
  const { clientName, industry, targetAudience, useCase, competitors } = config;
  const comp1 = competitors[0] || 'Competitor A';
  const comp2 = competitors[1] || 'Competitor B';
  const comp3 = competitors[2] || 'Competitor C';

  return [
    {
      id: 'P1',
      label: 'Best in Category',
      prompt: `What is the best ${industry} service for ${targetAudience}?`,
      lookFor: `Is ${clientName} mentioned?`
    },
    {
      id: 'P2',
      label: 'Direct Brand Query',
      prompt: `What is ${clientName} and what do they do?`,
      lookFor: 'Accuracy of description, confidence level'
    },
    {
      id: 'P3',
      label: 'Competitor Comparison',
      prompt: `Compare ${clientName} vs ${comp1} vs ${comp2} for ${useCase}`,
      lookFor: `How is ${clientName} positioned vs competitors?`
    },
    {
      id: 'P4',
      label: 'Pros and Cons',
      prompt: `What are the pros and cons of ${clientName}?`,
      lookFor: 'Sentiment tone, accuracy, negative signals'
    },
    {
      id: 'P5',
      label: 'Top Providers',
      prompt: `Who are the top ${industry} companies for ${useCase}?`,
      lookFor: `Rank of ${clientName} in the list`
    },
    {
      id: 'P6',
      label: 'Competitor Strength',
      prompt: `Why do people choose ${comp1} over other ${industry} services?`,
      lookFor: 'What advantages competitors are getting cited for'
    },
  ];
}

function generateScoresheet(config, prompts) {
  const lines = [];
  const divider = '='.repeat(60);
  const thin = '-'.repeat(60);

  lines.push(divider);
  lines.push('  AEO CLARIFY — AI SHARE OF VOICE TRACKER');
  lines.push(divider);
  lines.push(`  Client:    ${config.clientName}`);
  lines.push(`  Industry:  ${config.industry}`);
  lines.push(`  Audience:  ${config.targetAudience}`);
  lines.push(`  Date:      ${config.auditDate}`);
  lines.push(divider);
  lines.push('');
  lines.push('  INSTRUCTIONS:');
  lines.push('  1. Open each AI engine in a fresh incognito/private window');
  lines.push('  2. Paste each prompt exactly as written');
  lines.push('  3. Record results in the scoresheet below');
  lines.push('  4. Score each result 0-5 using the scoring guide');
  lines.push('');
  lines.push('  SCORING GUIDE:');
  lines.push('  0 = Brand not mentioned at all');
  lines.push('  1 = Brief mention, low confidence or incorrect info');
  lines.push('  2 = Mentioned but not featured, or with errors');
  lines.push('  3 = Solid mention, mostly accurate');
  lines.push('  4 = Featured prominently, accurate');
  lines.push('  5 = Primary recommended answer, cited as definitive');
  lines.push('');

  AI_ENGINES.forEach(engine => {
    lines.push(divider);
    lines.push(`  ENGINE: ${engine.name.toUpperCase()}`);
    lines.push(`  Signal: ${engine.signal}`);
    lines.push(`  URL:    ${engine.url}`);
    lines.push(divider);

    prompts.forEach(p => {
      lines.push('');
      lines.push(`  [${p.id}] ${p.label}`);
      lines.push(thin);
      lines.push(`  PROMPT: "${p.prompt}"`);
      lines.push(`  LOOK FOR: ${p.lookFor}`);
      lines.push('');
      lines.push('  RESPONSE NOTES:');
      lines.push('  _______________________________________________');
      lines.push('  _______________________________________________');
      lines.push('  _______________________________________________');
      lines.push('');
      lines.push('  SCORE (0-5): ____');
      lines.push(`  Brand cited: YES / NO`);
      lines.push(`  Rank position: ____`);
      lines.push(`  Sentiment: POSITIVE / NEUTRAL / NEGATIVE`);
      lines.push('');
    });

    lines.push(thin);
    lines.push(`  ${engine.name.toUpperCase()} TOTAL SCORE: ____ / ${prompts.length * 5}`);
    lines.push('');
  });

  lines.push(divider);
  lines.push('  OVERALL AI SHARE OF VOICE SUMMARY');
  lines.push(divider);

  AI_ENGINES.forEach(engine => {
    lines.push(`  ${engine.name.padEnd(15)} Score: ____ / ${prompts.length * 5}   Grade: ____`);
  });

  lines.push('');
  lines.push(`  TOTAL SCORE:  ____ / ${AI_ENGINES.length * prompts.length * 5}`);
  lines.push('');
  lines.push('  GRADES:');
  lines.push('  0-20%  = INVISIBLE — AI engines do not know this brand');
  lines.push('  21-50% = FRAGMENTED — Occasional mentions, low confidence');
  lines.push('  51-75% = EMERGING — Growing presence, some gaps remain');
  lines.push('  76-90% = AUTHORITY — Strong presence across most engines');
  lines.push('  91%+   = MOAT STATUS — Definitive answer across all engines');
  lines.push('');
  lines.push(divider);
  lines.push('  COMPETITOR INTELLIGENCE NOTES');
  lines.push(divider);

  config.competitors.forEach(comp => {
    lines.push('');
    lines.push(`  ${comp}:`);
    lines.push('  Which engines cite them most? ___________________');
    lines.push('  What language/framing does AI use? ______________');
    lines.push('  What sphere are they winning? ___________________');
    lines.push('  Our gap to close: _______________________________');
  });

  lines.push('');
  lines.push(divider);
  lines.push('  NEXT ACTIONS (based on this audit)');
  lines.push(divider);
  lines.push('');
  lines.push('  1. _______________________________________________');
  lines.push('  2. _______________________________________________');
  lines.push('  3. _______________________________________________');
  lines.push('  4. _______________________________________________');
  lines.push('  5. _______________________________________________');
  lines.push('');
  lines.push(`  Audited by: _______________  Date: ${config.auditDate}`);
  lines.push(divider);

  return lines.join('\n');
}

function run() {
  let config = DEFAULT_CONFIG;

  // Load config file if provided
  const configFile = process.argv[2];
  if (configFile && fs.existsSync(configFile)) {
    try {
      config = { ...DEFAULT_CONFIG, ...JSON.parse(fs.readFileSync(configFile, 'utf8')) };
      console.log(`\nLoaded config: ${configFile}`);
    } catch (e) {
      console.error('Error reading config file:', e.message);
    }
  }

  const prompts = buildPrompts(config);
  const scoresheet = generateScoresheet(config, prompts);

  // Output to console
  console.log(scoresheet);

  // Save to file
  const outputFile = path.join(
    __dirname,
    `sov-audit-${config.clientName.replace(/\s+/g, '-').toLowerCase()}-${config.auditDate}.txt`
  );
  fs.writeFileSync(outputFile, scoresheet);
  console.log(`\n✅ Scoresheet saved to: ${outputFile}`);
  console.log('\nOpen each AI engine, run the prompts, fill in the scoresheet.');
  console.log('This is your client\'s baseline. Everything we do gets measured against it.\n');
}

run();
