/**
 * F1_q41: O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
 * distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
 * seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
 * escreva o custo ao consumidor.
 */

import { question } from "readline-sync";

// Início
const custo_fabrica = Number(question('Custo de fabrica do carro(R$): '))

// Processamento
const valor_taxa_distribuidor = custo_fabrica * 0.28
const valor_impostos = custo_fabrica * 0.45
const custo_carro = custo_fabrica + valor_taxa_distribuidor + valor_impostos

// Saída
console.log(`> Valor da taxa do distribuidor = R$ ${valor_taxa_distribuidor.toFixed(2)}`)
console.log(`> Valor de impostos = R$ ${valor_impostos.toFixed(2)}`)
console.log(`> Custo Final ao Consumidor = R$ ${custo_carro.toFixed(2)}`)
console.log('-------------------')
