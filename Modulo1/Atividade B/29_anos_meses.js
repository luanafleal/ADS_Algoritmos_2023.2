/**
 * F1_q29: Leia um número inteiro de meses, calcule e
 * escreva quantos anos e quantos meses ele corresponde.
 */

import { question } from "readline-sync";

// Início
const meses = Number(question('Qtd de Meses: '))

// Processamento
const anos = Math.floor(meses / 12)                      
const meses_restante = meses % 12

// Saída
console.log(`> ${anos} anos e ${meses_restante} mes(es)!`)
console.log('-------------------')
