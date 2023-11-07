import { readFileSync } from 'node:fs';

const input = readFileSync('src/problems/day02.txt', 'utf-8');

const win = new Map<string, string>(
  [
    ['X', 'C'],
    ['Y', 'A'],
    ['Z', 'B'],
  ],
);

const same = new Map<string, string>(
  [
    ['X', 'A'],
    ['Y', 'B'],
    ['Z', 'C'],
  ],
);

// part 1
const set = input
  .split('\n\n')
  .map(x => x
    .split('\n')
    .filter(Boolean)
    .map(round => round
      .split(' ')));
console.log(set);
// const ans = input
//   .split('\n\n')
//   .map(x => x
//     .split('\n')
//     .map(v => Number.parseInt(v))
//     .filter(Boolean)
//     .reduce((a, b) => a + b, 0));

// console.log(Math.max(...ans));

// part 2
// console.log(ans
//   .sort((a, b) => b - a)
//   .slice(0, 3)
//   .reduce((a, b) => a + b, 0));
