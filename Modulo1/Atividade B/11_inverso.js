/**
 * F01_q11: Leia um número inteiro (3 dígitos)
 * e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
 */

import { question } from 'readline-sync'

// Entrada
const numero = Number(question("Digite o numero(3 digitos): "))

// Processamento
const unidade = numero % 10
const dezena = Math.floor((numero % 100) / 10)
const centena = Math.floor(numero / 100)
const numero_inverso = unidade * 100 + dezena * 10 + centena

// Saida
console.log(`> Inverso: ${numero_inverso}`)