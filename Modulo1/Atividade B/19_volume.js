/**
 * F01_q19: Leia o valor do raio de uma esfera,
 * calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
 */

import { question } from 'readline-sync'

console.log('---- Volume da Esfera ----')
// Entrada
const raio = Number(question('Raio: ')) 

// Processamento
const valorPi = 3.14
const volume_esfera = (4 * valorPi * raio**3) / 3

// Saida
console.log(`> Volume da Esfera: ${volume_esfera.toFixed(2)}`)