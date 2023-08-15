/**
 * F1_q38: Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
 * resultado em forma de fração.
 */

import { question } from "readline-sync";

// Início
console.log('> Fração 1')
const numerador1 = Number(question('Numerador: '))
const denominador1 = Number(question('Denominador: '))
console.log('> Fração 2')
const numerador2 = Number(question('Numerador: '))
const denominador2 = Number(question('Denominador: '))


// Processamento
const novo_denominador = denominador1 * denominador2
const novo_numerador = denominador2 * numerador1 + denominador1 * numerador2


// Saída
console.log(`> Soma = ${novo_numerador}/${novo_denominador}`)
console.log('-------------------')

