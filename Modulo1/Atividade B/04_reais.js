/**
 * F01_q04: Leia o valor do dólar e um valor em dólar,
 * calcule e escreva o equivalente em real (R$).
 */

import { question } from 'readline-sync'

console.log('-------- US$ -> R$ --------')

// Entrada
const dolares = Number(question('Valor(US$): '))

// Processamento
const cotacao = 4.90
const valor_reais = dolares * cotacao

// Saída
console.log(`>> US$ ${dolares.toFixed(2)} igual a R$ ${valor_reais.toFixed(2)}!`)