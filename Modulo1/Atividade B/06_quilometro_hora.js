/**
 * F01_q06: Leia uma velocidade em km/h, calcule e
 * escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
 */

import { question } from 'readline-sync'

console.log('-------- (km/h) -> (m/s) --------')

// Entrada
const velocidade_km = Number(question('Velocidade(km/h): '))

// Processamento
const velocidade_em_ms = velocidade_km / 3.6

// Saída
console.log(`>> ${velocidade_km} km/h equivale a ${velocidade_em_ms.toFixed(2)} m/s`)