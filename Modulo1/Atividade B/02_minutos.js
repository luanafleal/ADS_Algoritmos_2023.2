/**
 * F01_q02: Leia um valor em horas e um valor em minutos,
 * calcule e escreva o equivalente em minutos.
 */

import { question } from 'readline-sync'

console.log('--- Total Minutos ---')
// Entrada
const horas = Number(question('Horas: '))
const minutos = Number(question('Minutos: '))

// Processamento
const total_minutos = horas * 60 + minutos

// Saída
console.log(`>> ${horas}h${minutos}min corresponde a ${total_minutos} min!`)