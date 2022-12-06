const input = require('./input');

const example = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const [stacksData, procedure] = example.replace(/[\[\]]/g, '').split('\n\n').map(parts => parts.split('\n'))

function getStacksNumber() {
    return stacksData.pop().replace(/ /g, '').length;
}

const stacks = Array(getStacksNumber()).fill([]);

for (let i = stacksData.length - 1; i >= 0; i--) {
    const stacksContent = stacksData[i].split(' ');

    console.log('stacksContent', stacksContent);
}

console.log(stacksData);
