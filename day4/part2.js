const input = require("./input");

const example = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const assignmentsPairs = input.split("\n");

function areAssignmentsOverlapping(assignment1, assignment2) {
    const assignment1Range = assignment1.split("-").map(Number);
    const assignment2Range = assignment2.split("-").map(Number);

    return assignment1Range[0] >= assignment2Range[0] && assignment1Range[0] <= assignment2Range[1]
    || assignment1Range[1] >= assignment2Range[0] && assignment1Range[1] <= assignment2Range[1]
    || assignment2Range[0] >= assignment1Range[0] && assignment2Range[0] <= assignment1Range[1]
    || assignment2Range[1] >= assignment1Range[0] && assignment2Range[1] <= assignment1Range[1]
}

const assignmentsOverlapping = assignmentsPairs.filter(
    (assignmentPair) => {
        const assignments = assignmentPair.split(',');
        
        return areAssignmentsOverlapping(assignments[0], assignments[1])
    }
)


console.log(assignmentsOverlapping.length);
