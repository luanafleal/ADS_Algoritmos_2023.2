/**
 * F1_q39: Leia três números inteiros e positivos (A, B, C)
 * e calcule a seguinte expressão: D = R+S/2, onde R = (A + B)^2
 * e S = (B + C)^2
 */

import { question } from "readline-sync";

// Início
console.log('Digite Sua Idade Em(Anos/Meses/Dias)!')
const a = Number(question('Numero 1: '))
const b = Number(question('Numero 2: '))
const c = Number(question('Numero 3: '))

// Processamento
const r = (a + b)**2
const s = (b + c)**2
const d = (r + s) / 2

// Saída
console.log(`> D = ${d}`)
console.log('-------------------')

