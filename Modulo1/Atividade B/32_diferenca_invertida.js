/**
 * F1_q32: Leia um número inteiro (3 dígitos), calcule e escreva
 * a diferença entre o número e seu inverso.
 */

import { question } from "readline-sync";

// Início
const numero = Number(question('Numero(3 digitos): '))

// Processamento
const centena = Math.floor(numero / 100)
const dezena = Math.floor((numero % 100) / 10)
const unidade = numero % 10
const numero_invertido = unidade * 100 + dezena * 10 + centena

const diferenca = numero - numero_invertido

// Saída
console.log(`> Diferença: ${numero} - ${numero_invertido} = ${diferenca}`)
console.log('-------------------')
