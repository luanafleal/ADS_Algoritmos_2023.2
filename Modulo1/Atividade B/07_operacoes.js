/**
 * F01_q07: Leia 3 números, calcule e escreva a soma
 * dos 2 primeiros e a diferença entre os 2 últimos.
 */

import { question } from 'readline-sync'

// Entrada
const num1 = Number(question('Primeiro Numero: '))
const num2 = Number(question('Segundo Numero: '))
const num3 = Number(question('Terceiro Numero: '))

// Processamento
const soma = num1 + num2
const diff = num2 - num3

// Saída
console.log(`\n>> Soma: ${num1} + ${num2} = ${soma}`)
console.log(`>> Diferença: ${num2} - ${num3} = ${diff}`)