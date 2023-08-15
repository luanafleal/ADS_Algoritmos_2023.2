/**
 * F01_q18: Leia o valor do raio de uma circunferência,
 * calcule e escreva seu comprimento.(c = 2 * p * r)
 */

import { question } from 'readline-sync'

console.log('---- Comprimento da Circuferencia ----')
// Entrada
const raio = Number(question('Raio da Circuferencia: '))

// Processamento
const valorPi = 3.1415
const comprimento_circuferencia = 2 * valorPi * raio

// Saida
console.log(`> Comprimento: ${comprimento_circuferencia.toFixed(2)}`)