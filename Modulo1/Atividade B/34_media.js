/**
 * F1_q34: Leia 3 números, calcule e escreva a média dos números.
 */

import { question } from "readline-sync";

// Início
const numero1 = Number(question('Primeiro Numero: '))
const numero2 = Number(question('Segundo Numero: '))
const numero3 = Number(question('Terceiro Numero: '))

// Processamento
const media = (numero1 + numero2 + numero3) / 3

// Saída
console.log(`> Média: ${media.toFixed(2)}`)
console.log('-------------------')
