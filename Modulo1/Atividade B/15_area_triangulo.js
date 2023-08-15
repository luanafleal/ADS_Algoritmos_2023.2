/**
 * F01_q15: Leia o valor da base e altura de um triângulo,
 * calcule e escreva sua área. (área=(base * altura)/2)
 */

import { question } from 'readline-sync'

console.log('---- Calcular Área do Triângulo ----')
// Entrada
const base = Number(question('Base: '))
const altura = Number(question('Altura: '))

// Processamento
const area_triangulo = (base * altura) / 2

// Saida
console.log(`> Área: ${area_triangulo.toFixed(2)}`)