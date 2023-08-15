/**
 * F01_q10: Leia 2 números inteiros,
 * calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
 */

import { question } from 'readline-sync'

// Entrada
const num1 = Number(question("Digite o primeiro numero: "))
const num2 = Number(question("Digite o segundo numero: "))

// Processamento
const divisao = num1 / num2
const resto = num1 % num2

// Saida
console.log(`> Resultado:
Quociente: ${num1} / ${num2} = ${divisao}
Resto: ${resto} `)