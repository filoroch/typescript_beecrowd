var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var newLines = lines.map(Number)

const [tempoGasto, velocidadeMedia] = newLines;

const distancia = velocidadeMedia * tempoGasto;
const litrosGastos = distancia / 12;

console.log(litrosGastos.toFixed(3)) // ele so quer o gasto de combustivel

