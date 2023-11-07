import { readFileSync } from 'node:fs';

const input = readFileSync('src/problems/day01.txt', 'utf-8');
// part 1
const ans = input
  .split('\n\n')
  .map(x => x
    .split('\n')
    .map(v => Number.parseInt(v))
    .filter(Boolean)
    .reduce((a, b) => a + b, 0));

console.log(Math.max(...ans));

// part 2
console.log(ans
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b, 0));
