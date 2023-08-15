/**
 * F1_q44: Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um
 * algoritmo que calcule a quantidade de cada um desses componentes para se obter certa
 * quantidade de latão (em kg), informada pelo usuário.
 */

import { question } from "readline-sync";

// Início
const kg_latao = Number(question('Quant. de Latao(kg): '))

// Processamento
const qtd_cobre = kg_latao * 0.70
const qtd_zinco = kg_latao * 0.30

// Saída
console.log(`> Quant. de Cobre = ${qtd_cobre.toFixed(2)} kg`)
console.log(`> Quant. de Zinco = ${qtd_zinco.toFixed(2)} kg`)
console.log('-------------------')
