/**
 * F1_q23: Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
 */

import { question } from "readline-sync";

console.log('------ kg -> g -----')
// Início
const quilograma = Number(question('Valor em Quilograma(kg): '))

// Processamento
const gramas = quilograma * 1000

// Saída
console.log(`> ${quilograma} kg equivale a ${gramas} g`)
console.log('-------------------')
