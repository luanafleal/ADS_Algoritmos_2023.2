/**
 * F1_q26: Leia um número inteiro de dias,
 * calcule e escreva quantas semanas e quantos dias ele corresponde.
 */

import { question } from "readline-sync";

// Início
const dias = Number(question('Qtd de Dias: '))

// Processamento
const semanas = Math.floor(dias / 7)
const dias_restante = dias % 7 // dias - (semanas * 7)

// Saída
console.log(`> ${dias} dias equivale(m) a ${semanas} semanas e ${dias_restante} dias`)
console.log('-------------------')

