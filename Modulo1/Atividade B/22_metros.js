/**
 * F1_q22: Leia um valor em km, calcule e escreva o equivalente em m.
 */

import { question } from "readline-sync";

console.log('------ km -> m -----')
// Início
const valor_km = Number(question('Distancia(km): '))

// Processamento
const valor_m = valor_km * 1000

// Saída
console.log(`\n> ${valor_km} km equivale a ${valor_m} m`)
console.log('-------------------')
