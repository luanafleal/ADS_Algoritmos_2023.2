/**
 * F1_q31: Leia um número inteiro (4 dígitos binários),
 * calcule e escreva o equivalente na base decimal.
 */

import { question } from "readline-sync";

// Início
const numero_binario = Number(question('Numero Binario(4 digitos): '))

// Processamento
const posicao3 = Math.floor(numero_binario / 1000)
const posicao2 = Math.floor((numero_binario % 1000) / 100)
const posicao1 = Math.floor((numero_binario % 100) / 10)
const posicao0 = numero_binario % 10

const numero_em_decimal = (posicao3  * 2**3) + (posicao2  * 2**2) + (posicao1 * 2**1) + (posicao0 * 2**0)

// Saída
console.log(`> ${numero_binario} (bin) = ${numero_em_decimal} (dec)`)
console.log('-------------------')
