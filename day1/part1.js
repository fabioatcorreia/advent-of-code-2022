const input = require('./part1-input');
const values = input.split('\n\n').map(elfFood => elfFood.split('\n'));

const caloriesByElf = values.map((elfItems) => elfItems.reduce((sum, itemCalories) => sum + Number(itemCalories), 0))
const maxCalories = Math.max(...caloriesByElf);

console.log(maxCalories);
