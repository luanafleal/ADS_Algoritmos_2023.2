/**
 * F01_q12: Leia o salário de um trabalhador e escreva
 * seu novo salário com um aumento de 25%.
 */

import { question } from 'readline-sync'

console.log('---- AUMENTO DE SALÁRIO ----')
// Entrada
const salario = Number(question('Salario(R$): '))
const perc_aumento = Number(question('Percentual de Aumento(%): '))

// Processamento
const novo_salario = salario + (salario * perc_aumento/100)

// Saida
console.log(`> Novo Salário: ${novo_salario.toFixed(2)}`)