var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/** CALCULO DE UMA ESFERA
 * Crie um programa que CALCULE e mostre o VOLUME de uma ESFERA a partir de seu RAIO(R)
 * A formula para calcular o volume é:
 * (4/3) * PI(3.14159) * R^3 (elevado a três)
 */

const PI = Math.PI.toFixed(5);
const SPHERE = (raio) => {return (4.0/3) * PI * (raio = Math.pow(raio, 3))} 

console.log('VOLUME = '+ SPHERE(input).toFixed(3));