/**
 * F1_q36: Leia a idade de uma pessoa expressa em anos, meses e dias e
 * escreva-a expressa apenas em dias.
 */

import { question } from "readline-sync";

// Início
console.log('Digite Sua Idade Em(Anos/Meses/Dias)!')
const anos = Number(question('Anos: '))
const meses = Number(question('Meses: '))
const dias = Number(question('Dias: '))

// Processamento
const dias_vividos = anos * 360 + meses * 30 + dias

// Saída
console.log(`> Sua idade: ${dias_vividos} dia(s)!`)
console.log('-------------------')

