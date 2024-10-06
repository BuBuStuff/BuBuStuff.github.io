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
  'proposal': 'footer > :nth-child(2n+1)',
  'answer': 'yes' },

{
  'proposal': 'footer :nth-child(2n+1)',
  'answer': 'no' },

{
  'proposal': ':empty',
  'answer': 'yes' },

{
  'proposal': '[class*="widget"]',
  'answer': 'yes' },

{
  'proposal': '.widget > *',
  'answer': 'yes' },

{
  'proposal': '.widget.widget1',
  'answer': 'yes' },

{
  'proposal': 'div.widget1',
  'answer': 'yes' },

{
  'proposal': '[class^="widget"]',
  'answer': 'yes' },

{
  'proposal': 'section :first-of-type',
  'answer': 'yes' }];
