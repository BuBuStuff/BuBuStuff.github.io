const questions = [
{
  'proposal': 'Are cupcakes made of cupcake?',
  'answer': 'yes' },

{
  'proposal': 'h2 + p',
  'answer': 'no' },

{
  'proposal': 'h2 ~ p',
  'answer': 'yes' },

{
  'proposal': '[id="section1"]',
  'answer': 'yes' },

{
  'proposal': 'h2 + p',
  'answer': 'yes' },

{
  'proposal': 'section p:first-child',
  'answer': 'no' },

{
  'proposal': 'section p:first-of-type',
  'answer': 'yes' },

{
  'proposal': 'main *',
  'answer': 'no' },

{
  'proposal': 'main > *',
  'answer': 'yes' },

{
  'proposal': 'h2 ~ p',
  'answer': 'no' },

{
  'proposal': 'main p',
  'answer': 'no' },

{
  'proposal': 'main > p',
  'answer': 'yes' },

{
  'proposal': 'footer div',
  'answer': 'yes' },

{
  'proposal': 'footer > div',
  'answer': 'yes' },

{
  'proposal': 'footer > :nth-child(n)',
  'answer': 'yes' },

{
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
