/**
 * F1_q05: Leia um número inteiro (3 dígitos), calcule e escreva
 * a soma de seus elementos (C + D + U).
 */

import { question } from "readline-sync";

// Início
const numero = Number(question('Numero(3 digitos): '))

// Processamento
const centena = Math.floor(numero / 100)
const dezena = Math.floor((numero % 100) / 10)
const unidade = numero % 10

const soma_dos_elementos = centena + dezena + unidade

// Saída
console.log(`> Soma dos Elementos: ${centena} + ${dezena} + ${unidade} = ${soma_dos_elementos}`)
console.log('-------------------')
