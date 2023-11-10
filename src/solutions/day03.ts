import { readFileSync } from 'node:fs';

export const input = readFileSync('src/problems/day03.txt', 'utf-8');
// console.log(input);

// part 1
export const set1 = input
  .split('\n').filter(Boolean)
  .map((line) => {
    const { length } = line;
    const [p1, p2] = [line.slice(0, length / 2), line.slice(length / 2)];
    const set = new Set<string>(p1.split(''));
    const target = p2.split('').filter(v => set.has(v))[0];
    const v = target.charCodeAt(0);

    return v < 'a'.charCodeAt(0) ? v - 'A'.charCodeAt(0) + 27 : v - 'a'.charCodeAt(0) + 1;
  });

// console.log(set1.reduce((a, b) => a + b, 0));

// part 2
export const set2 = input
  .split('\n').filter(Boolean);
export const set3 = Array.of<Array<string>>();

for (let i = 0; i < set2.length; i++) {
  if (i % 3 === 0)
    set3[Math.floor(i / 3)] = [set2[i]];
  else
    set3[Math.floor(i / 3)].push(set2[i]);
}

export const result = set3.map((set) => {
  const [p1, p2, p3] = set;
  const [s1, s2] = [new Set<string>(p1.split('')), new Set<string>(p2.split(''))];
  const target = p3.split('').filter(v => s1.has(v) && s2.has(v))[0];
  const v = target.charCodeAt(0);

  return v < 'a'.charCodeAt(0) ? v - 'A'.charCodeAt(0) + 27 : v - 'a'.charCodeAt(0) + 1;
}).reduce((a, b) => a + b, 0);

// console.log(result);
