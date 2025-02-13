var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [A, B, C] = input.split('\n').map(parseFloat);

const MaiorAB = (a,b,c) => {
    const maxAB = (a + b + Math.abs(a-b)) / 2;
    const maxBC = (b + c + Math.abs(b-c)) / 2;
    const maxABC = (maxAB + maxBC + Math.abs(maxAB-maxBC)) / 2;

    return maxABC
} 

console.log(MaiorAB(A, B, C) + ' eh o maior');