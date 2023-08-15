/**
 * F01_q08: Leia 2 números, calcule e escreva a divisão
 * da soma pela subtração dos números lidos.
 */

import { question } from 'readline-sync'

// Entrada
const num1 = Number(question('Primeiro Numero: '))
const num2 = Number(question('Segundo Numero: '))

// Processamento
const divisao = (num1 + num2) / (num1 - num2)

// Saída
console.log(`>> Resultado: ${divisao}`)