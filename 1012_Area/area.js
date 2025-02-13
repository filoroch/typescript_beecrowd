var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva um programa que leia 03 numeros de pontos flutuante (floats).
 * Calcule:
 * a. a area do retangulo triangulo de base A e peso C
 * b. a area do raio do circulo. PI 
 * c. a area do trapezio que tem A e B como base e C como peso;
 * d. a area do quadrado de lado B;
 * e. a area do retangulo com lados A e B;
 */

const PI = 3.14159;

function Area(A, B, C){
    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat (C);

    console.log(`TRIANGULO: ${RETANGLED_TRIANGLE(A,C).toFixed(3)}`);
    console.log(`CIRCULO: ${RADIUS_CIRCLE(C).toFixed(3)}`);
    console.log(`TRAPEZIO: ${TRAPEZIUM(B,A,C).toFixed(3)}`);
    console.log(`QUADRADO: ${SQUARE(B).toFixed(3)}`);
    console.log(`RETANGULO: ${RECTANGLE(A,B).toFixed(3)}`);
};

const RETANGLED_TRIANGLE = (A,C) => {return (A*C)/2};
const RADIUS_CIRCLE = (C) => {return (Math.pow(C, 2)*PI)};
const TRAPEZIUM = (B, b, h) => {return (B+b)*h/2};
const SQUARE = (B) => {return Math.pow(B,2)};
const RECTANGLE = (A, B) => {return (A*B)};

// Lendo os valores de entrada corretamente
const [A, B, C] = lines[0].split(' ').map(parseFloat);

// Chamando a função principal
Area(A, B, C);