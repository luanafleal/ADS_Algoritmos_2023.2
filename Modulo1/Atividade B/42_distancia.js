/**
 * F1_q42: Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
 * ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
 */

import { question } from "readline-sync";

// Início
const x1 = Number(question('X1: '))
const y1 = Number(question('Y1: '))
const x2 = Number(question('X2: '))
const y2 = Number(question('Y2: '))


// Processamento
const distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

// Saída
console.log(`> Distância entre P1(${x1}, ${y1}) e  P1(${x2}, ${y2}) = ${distancia.toFixed(1)}`)
console.log('-------------------')

