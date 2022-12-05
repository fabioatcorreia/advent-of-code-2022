const input = require("./input");

const example = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const prorities = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26],
    ['A', 27],
    ['B', 28],
    ['C', 29],
    ['D', 30],
    ['E', 31],
    ['F', 32],
    ['G', 33],
    ['H', 34],
    ['I', 35],
    ['J', 36],
    ['K', 37],
    ['L', 38],
    ['M', 39],
    ['N', 40],
    ['O', 41],
    ['P', 42],
    ['Q', 43],
    ['R', 44],
    ['S', 45],
    ['T', 46],
    ['U', 47],
    ['V', 48],
    ['W', 49],
    ['X', 50],
    ['Y', 51],
    ['Z', 52]
]);

const rucksacks = input.split("\n");

function intersection(listA, listB) {
    const setB = new Set(listB);
    return [...listA].find(item => setB.has(item));
}

const result = rucksacks.reduce((currentSum, rucksack) => {
    // split into compartments
    const compartmentSize = rucksack.length / 2;

    const compartment1 = rucksack.slice(0, compartmentSize);
    const compartment2 = rucksack.slice(compartmentSize);

    // get item in both compartments (intersection)
    const repeatedItemType = intersection(compartment1, compartment2);

    return currentSum + prorities.get(repeatedItemType);
}, 0)

console.log(result);
