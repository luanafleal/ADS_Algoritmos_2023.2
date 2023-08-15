/**
 * F01_q13: Leia um valor em real (R$),
 * calcule e escreva 70% deste valor.
 */

import { question } from 'readline-sync'

// Entrada
const valor_em_real = Number(question('Valor(R$): '))

// Processamento
const valor = valor_em_real * 0.70

// Saida
console.log(`> 70% de ${valor_em_real.toFixed(2)} é: R$ ${valor.toFixed(2)}`)