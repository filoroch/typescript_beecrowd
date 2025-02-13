var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
function calcularMedia () {
    const VALUE_A = lines[0];
    const VALUE_B = lines[1];

    const WEIGHT_A = 3.5;
    const WEIGHT_B = 7.5;
    
    // MULTIPLIQUE VALOR * PESO = SOMA DOS PRODUTOS
    const PRODUCT_SUM = (VALUE_A * WEIGHT_A) + (VALUE_B * WEIGHT_B);
    // SOME OS PESOS = SOMA DOS PESOS
    const WEIGHT_SUM = WEIGHT_A + WEIGHT_B;
    // DIVIDA O PRODUTO PELOS PESOS 
    const FINAL_PRODUCT = PRODUCT_SUM / WEIGHT_SUM;

    return console.log('MEDIA = ' + FINAL_PRODUCT.toFixed(5));
}

calcularMedia();