/**
 * F1_q35: Leia um número inteiro (4 dígitos), calcule e escreva a
 * soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.
 */

import { question } from "readline-sync";

// Início
const numero = Number(question('Numero(4 digitos): '))

// Processamento
const unid_milhar = Math.floor(numero / 1000)
const centena = Math.floor((numero % 1000) / 100)
const dezena = Math.floor((numero % 100) / 10)
const unidade = numero % 10

const soma_dos_elementos = unid_milhar + centena + dezena + unidade

// Saída
console.log(`> Soma dos Elementos: ${unid_milhar} + ${centena} + ${dezena} + ${unidade} = ${soma_dos_elementos}`)
console.log('-------------------')
