/**
 * F01_q16: Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)
 */

import { question } from 'readline-sync'

console.log('---- Calcular Área do Quadrado ----')
// Entrada
const lado = Number(question('Lado do Quadrado: '))

// Processamento
const area_quadrado = lado**2

// Saida
console.log(`> Área: ${area_quadrado.toFixed(2)}`)