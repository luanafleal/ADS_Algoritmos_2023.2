/**
 * F04 - Q18: Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
 * crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
 * crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
 * necessários, para que a população da cidade A ultrapasse a população da cidade B.
 */

import { print, formatar_valor } from '../../utils/input.js'
import { porcentagem } from '../../utils/math.js'


function main() {
    let populacao_a = 200000
    let populacao_b = 800000

    const taxa_crescimento_a = 3.5
    const taxa_crecimento_b = 1.35
    let anos = 0

    while (populacao_a <= populacao_b) {
        populacao_a = populacao_a + porcentagem(populacao_a, taxa_crescimento_a)
        populacao_b = populacao_b + porcentagem(populacao_b, taxa_crecimento_b)

        anos++
    }
    print('Cenário Atual -----------------------------------')
    print('> Cidade A: 200.000 hab')
    print('> Cidade B: 800.000 hab')

    print(`\n> Levará ${anos} anos para a população da cidade A ultrapassar a população da cidade B.`)
    print(`Cenário após ${anos} anos ---------------------------`)
    print(`> Cidade A: ${formatar_valor(populacao_a)} hab`)
    print(`> Cidade B: ${formatar_valor(populacao_b)} hab`)
}

main()
