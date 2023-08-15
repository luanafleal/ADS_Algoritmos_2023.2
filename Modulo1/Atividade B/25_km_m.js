/**
 * F1_q25: Leia um número inteiro de metros,
 * calcule e escreva quantos Km e quantos metros ele corresponde.
 */

import { question } from "readline-sync";

// Início
const valor_m = Number(question('Distancia(m): '))

// Processamento
const valor_km = Math.floor(valor_m / 1000)
const metros_restante = valor_m % 1000

// Saída
console.log(`> ${valor_m} m equivale a ${valor_km} km e ${metros_restante} m`)
console.log('-------------------')

