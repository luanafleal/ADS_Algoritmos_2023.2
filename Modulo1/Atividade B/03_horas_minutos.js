/**
 * F01_03: Leia um valor em minutos, calcule e escreva o
 * equivalente em horas e minutos.
 */

import { question } from 'readline-sync'

// Entrada
const minutos = Number(question('Minutos: '))

// Processamento
const total_horas = Math.floor(minutos / 60)
const minutosRestante = minutos % 60

// Saída
console.log(`>> ${minutos}min corresponde a ${total_horas}h${minutosRestante}min!`)