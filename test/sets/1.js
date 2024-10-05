const questions = [
{
  'selector': 'p.out',
  'proposal': 'p.out',
  'answer': 'yes' },

{
  'selector': 'h2 ~ p',
  'proposal': 'h2 + p',
  'answer': 'no' },

{
  'selector': 'h2 ~ p',
  'proposal': 'h2 ~ p',
  'answer': 'yes' },

{
  'selector': '#section1',
  'proposal': '[id="section1"]',
  'answer': 'yes' },

{
  'selector': 'h2 + p',
  'proposal': 'h2 + p',
  'answer': 'yes' },

{
  'selector': 'section p:first-of-type',
  'proposal': 'section p:first-child',
  'answer': 'no' },

{
  'selector': 'section p:first-of-type',
  'proposal': 'section p:first-of-type',
  'answer': 'yes' },

{
  'selector': 'main > *',
  'proposal': 'main *',
  'answer': 'no' },

{
  'selector': 'main > *',
  'proposal': 'main > *',
  'answer': 'yes' },

{
  'selector': 'main p',
  'proposal': 'h2 ~ p',
  'answer': 'no' },

{
  'selector': 'main > p',
  'proposal': 'main p',
  'answer': 'no' },

{
  'selector': 'main > p',
  'proposal': 'main > p',
  'answer': 'yes' },

{
  'selector': 'footer div',
  'proposal': 'footer div',
  'answer': 'yes' },

{
  'selector': 'footer > div',
  'proposal': 'footer > div',
  'answer': 'yes' },

{
  'selector': 'footer > :nth-child(n)',
  'proposal': 'footer > :nth-child(n)',
  'answer': 'yes' },

{
  'selector': 'footer > div',
  'proposal': 'footer div',
  'answer': 'no' },

{
  'selector': 'footer > :nth-child(2n+1)',
  'proposal': 'footer > :nth-child(2n+1)',
  'answer': 'yes' },

{
  'selector': 'footer > :nth-child(2n+1)',
  'proposal': 'footer :nth-child(2n+1)',
  'answer': 'no' },

{
  'selector': ':empty',
  'proposal': ':empty',
  'answer': 'yes' },

{
  'selector': '[class*="widget"]',
  'proposal': '[class*="widget"]',
  'answer': 'yes' },

{
  'selector': '.widget > *',
  'proposal': '.widget > *',
  'answer': 'yes' },

{
  'selector': '.widget.widget1',
  'proposal': '.widget.widget1',
  'answer': 'yes' },

{
  'selector': 'div.widget1',
  'proposal': 'div.widget1',
  'answer': 'yes' },

{
  'selector': '[class^="widget"]',
  'proposal': '[class^="widget"]',
  'answer': 'yes' },

{
  'selector': 'section :first-of-type',
  'proposal': 'section :first-of-type',
  'answer': 'yes' }];
