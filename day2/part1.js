const input = require("./input");

/* const example = `B Z
A Z
C X
C Z` */

const rounds = input.split("\n");

// opponent: A for Rock, B for Paper, and C for Scissors
// player: X for Rock, Y for Paper, and Z for Scissors

// scores: 1 for Rock, 2 for Paper, and 3 for Scissors + 0 lost, 3 draw, 6 win

const normalizedRounds = rounds.map((round) =>
  round.replace(/[AX]/g, 1).replace(/[BY]/g, 2).replace(/[CZ]/g, 3)
);

function roundResult(round) {
    const opponentPlay = round[0];
    const playerPlay = round[2];

    if (opponentPlay === playerPlay) {
        return 3;
    }

    // are there better ways to check for a win?
    const result = opponentPlay - playerPlay
    if (result === -1 || result === 2) {
        return 6;
    }

    return 0
}

const result = normalizedRounds.reduce((currentSum, round) => {
    const playerPlay = Number(round[2]);

    return currentSum + playerPlay + roundResult(round);
}, 0)

console.log(result);
