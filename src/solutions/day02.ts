import { readFileSync } from 'node:fs';

const input = readFileSync('src/problems/day02.txt', 'utf-8');

const win = new Map<string, string>(
  [
    ['X', 'C'],
    ['Y', 'A'],
    ['Z', 'B'],
  ],
);

const score = new Map<string, number>(
  [
    ['X', 0],
    ['Y', 3],
    ['Z', 6],
  ],
);

const findWin = new Map<string, number>(
  [
    ['A', 2],
    ['B', 3],
    ['C', 1],
  ],
);

const findDraw = new Map<string, number>(
  [
    ['A', 1],
    ['B', 2],
    ['C', 3],
  ],
);

const findLose = new Map<string, number>(
  [
    ['A', 3],
    ['B', 1],
    ['C', 2],
  ],
);

const draw = new Map<string, string>(
  [
    ['X', 'A'],
    ['Y', 'B'],
    ['Z', 'C'],
  ],
);

// part 1
export const set = input
  .split('\n\n')
  .map(x => x
    .split('\n')
    .filter(Boolean)
    .map((round) => {
      const [p1, p2] = round.split(' ');
      if (win.get(p2) === p1) return 6 + score.get(p2)!;
      if (draw.get(p2) === p1) return 3 + score.get(p2)!;
      return score.get(p2);
    })
    .reduce((a, b) => a! + b!, 0),
  );

// console.log(set);

// part 2
export const set2 = input
  .split('\n\n')
  .map(x => x
    .split('\n')
    .filter(Boolean)
    .map((round) => {
      const [p1, p2] = round.split(' ');
      if (p2 === 'Z') return findWin.get(p1)! + score.get(p2)!;
      if (p2 === 'Y') return findDraw.get(p1)! + score.get(p2)!;
      return findLose.get(p1)! + score.get(p2)!;
    })
    .reduce((a, b) => a + b, 0),
  );

// console.log(set2);
