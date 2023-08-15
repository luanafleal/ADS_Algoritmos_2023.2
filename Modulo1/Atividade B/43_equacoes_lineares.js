/**
 * F1_q43: Um sistema de equações lineares do tipo ax+by = c, dx + ey = f, pode ser resolvido segundo mostrado abaixo.
 * x= ce - bf / ae - bd; y = af - cd / ae - bd. Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f,
 * calcule e escreva os valores de x e y.
 */

import { question } from "readline-sync";

// Início
const a = Number(question('Valor de A: '))
const b = Number(question('Valor de B: '))
const c = Number(question('Valor de C: '))
const d = Number(question('Valor de D: '))
const e = Number(question('Valor de E: '))
const f = Number(question('Valor de F: '))

// Processamento
const x = (c * e - b * f) / (a * e - b * d)
const y = (a * f - c * d) / (a * e - b * d)

// Saída
console.log(`> Valor de X = ${x}`)
console.log(`> Valor de Y= ${y}`)
console.log('-------------------')

