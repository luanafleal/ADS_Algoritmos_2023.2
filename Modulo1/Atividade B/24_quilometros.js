/**
 * F1_q24: Leia um valor em m, calcule e escreva o equivalente em km.
 */

import { question } from "readline-sync";

console.log('------ m -> km -----')
// Início
const valor_m = Number(question('Distancia(m): '))

// Processamento
const valor_km = valor_m / 1000

// Saída
console.log(`> ${valor_m} m equivale a ${valor_km} km`)
console.log('-------------------')

