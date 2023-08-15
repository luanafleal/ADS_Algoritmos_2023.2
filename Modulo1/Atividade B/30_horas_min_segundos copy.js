/**
 * F1_q30: Leia um número inteiro de minutos,
 * calcule e escreva quantos dias, quantas horas
 * e quantos minutos ele corresponde.
 */

import { question } from "readline-sync";

// Início
const minutos = Number(question('Qtd de Minutos: '))

// Processamento
const dias = Math.floor(minutos / 1440) //s
const horas = Math.floor((minutos % 1440) / 60)
const minutos_restantes = minutos % 60

// Saída
console.log(`> ${dias} dias, ${horas} horas e ${minutos_restantes} min`)
console.log('-------------------')
