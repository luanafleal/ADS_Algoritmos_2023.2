/**
 * F1_q28: Leia um número inteiro de horas, calcule e escreva quantas
 * semanas, quantos dias e quantas horas ele corresponde.
 */

import { question } from "readline-sync";

// Início
const horas = Number(question('Qtd de Horas: '))

// Processamento
const semanas = Math.floor(horas / 168)                      
const dias = Math.floor((horas % 168) / 24)
const horas_restantes = horas % 24

// Saída
console.log(`> ${semanas} semanas, ${dias} dias e ${horas_restantes} horas`)
console.log('-------------------')
