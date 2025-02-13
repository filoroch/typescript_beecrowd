var input = require('fs').readFileSync('/dev/stdin', 'utf8'); // recebe os valores como array de strings
const [A, B] = input.split('\n').map(Number); // recebe os valores de pulo de linha do input e transforma em Number com Map

const sumAB = (A, B) => {return A+B};

console.log(`X = ${sumAB(A, B)}`)