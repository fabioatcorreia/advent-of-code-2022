const input = require("./input");

const example = `A Y
B X
C Z`;

// opponent: A for Rock, B for Paper, and C for Scissors
// outcome: X for Loss, Y for Draw, and Z for Win
// scores: 1 for Rock, 2 for Paper, and 3 for Scissors + 0 lost, 3 draw, 6 win

const rounds = input.split("\n");

const playByOutcome = {
  A: {
    X: 3,
    Y: 1,
    Z: 2,
  },
  B: {
    X: 1,
    Y: 2,
    Z: 3,
  },
  C: {
    X: 2,
    Y: 3,
    Z: 1,
  },
};

const resultByOutcome = {
    X: 0,
    Y: 3,
    Z: 6,
};

const result = rounds.reduce((currentSum, round) => {
    const opponentPlay = round[0];
    const outcome = round[2];
    const playerPlay = playByOutcome[opponentPlay][outcome];
    const playResult = resultByOutcome[outcome];

    return currentSum + playerPlay + playResult;
}, 0)

console.log(result);
