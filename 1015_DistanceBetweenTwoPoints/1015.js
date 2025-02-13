var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

const [px1, py1] = lines[0].split(" ").map(parseFloat);
const [px2, py2] = lines[1].split(" ").map(parseFloat);

function Distance (x1, y1, x2, y2) {
    const x = Math.pow((x2-x1), 2);
    const y = Math.pow((y2-y1), 2);
    const DISTANCE = Math.sqrt(x+y);
    return DISTANCE.toFixed(4);
}

const DISTANCE = (x1, y1, x2, y2) => {
    Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
}

console.log(Distance(px1, py1, px2, py2));


