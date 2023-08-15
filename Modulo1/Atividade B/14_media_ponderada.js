/**
 * F01_q12: Leia 3 notas de um aluno e o peso de cada nota,
 * calcule e escreva a média ponderada.
 */

import { question } from 'readline-sync'

// Entrada
const nota1 = Number(question('Primeira Nota: '))
const peso1 = Number(question('Peso: '))
const nota2 = Number(question('Segunda Nota: '))
const peso2 = Number(question('Peso: '))
const nota3 = Number(question('Terceira Nota: '))
const peso3 = Number(question('Peso: '))


// Processamento
const media_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)

// Saida
console.log(`> Média Ponderada: ${media_ponderada.toFixed(2)}`)