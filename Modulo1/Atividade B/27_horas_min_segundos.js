/**
 * F1_q27: Leia um número inteiro de segundos,
 * calcule e escreva quantas horas, quantos minutos e quantos
 * segundos ele corresponde.
 */

import { question } from "readline-sync";

// Início
const segundos = Number(question('Segundos: '))

// Processamento
const horas = Math.floor(segundos / 3600)
const minutos = Math.floor((segundos % 3600) / 60)
const segundos_restante = segundos % 60

// Saída
console.log(`> ${horas} h, ${minutos} min e ${segundos_restante} s`)
console.log('-------------------')
