/**
 * F1_q37: Leia a idade de uma pessoa expressa em dias e
 * escreva-a expressa em anos, meses e dias.
 */

import { question } from "readline-sync";

console.log('---- Sua Idade(Anos/Meses/Dias)-----')
// Início
const dias = Number(question('Digite sua idade em numero de dias: '))

// Processamento
const anos = Math.floor(dias / 360)
const meses = Math.floor((dias % 360) / 30)
const dias_restante = dias % 30

// Saída
console.log(`> Sua idade: ${anos} ano(s), ${meses} mes(es) e ${dias_restante} dia(s)!`)
console.log('-------------------')

