/**
 * F01_q17: Leia o valor da base e altura de um retângulo,
 * calcule e escreva sua área. (área = base * altura)
 */

import { question } from 'readline-sync'

console.log('---- Calcular Área do Retâgulo ----')
// Entrada
const base = Number(question('Base: '))
const altura = Number(question('Altura: '))

// Processamento
const area_retangulo = base * altura

// Saida
console.log(`> Área: ${area_retangulo.toFixed(2)}`)