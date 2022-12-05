const input = require('./input');
const itemsByElf = input.split('\n\n').map(elfFood => elfFood.split('\n'));

function sum(a, b) {
    return Number(a) + Number(b);
}

const caloriesByElf = itemsByElf.map((elfItems) => elfItems.reduce(sum, 0))
caloriesByElf.sort((a, b) => b - a);

const result = caloriesByElf.slice(0, 3).reduce(sum, 0);

console.log(result);
