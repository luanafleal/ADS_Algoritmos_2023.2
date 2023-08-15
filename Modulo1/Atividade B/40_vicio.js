/**
 * F1_q40: Calcule a quantidade de dinheiro gasta por um fumante.
 * Dados de entrada: o número de anos que ele fuma, o no de cigarros
 * fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
 */

import { question } from "readline-sync";

// Início
const anos_vicio = Number(question('Numero de anos que ele fuma: '))
const cigarros_por_dia  = Number(question('Qtd. cigarros por dia: '))
const valor_carteira_cigarros = Number(question('Preço dda carteira de cigarro: '))

// Processamento
const qtd_cigarros_por_carteira = 20
const dinheiro_gasto = ((anos_vicio * 360 * cigarros_por_dia) / qtd_cigarros_por_carteira) * valor_carteira_cigarros

// Saída
console.log(`> Dinheiro gasto pelo fumante = R$ ${dinheiro_gasto.toFixed(2)}`)
console.log('-------------------')

