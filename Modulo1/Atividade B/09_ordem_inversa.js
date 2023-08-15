/**
 * F01_q09: Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
 */

import { question } from 'readline-sync'

// Entrada
const a = Number(question("Digite o numero A:"))
const b = Number(question("Digite o numero B:"))

// Saida
console.log(`Números em ordem inversa: ${b}, ${a}`)