/**
 * F04 -Q26: Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
 * em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
 * a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
 * · a média das idades das pessoas que responderam ótimo;
 * · a quantidade de pessoas que respondeu regular;
 * · o percentual de pessoas que respondeu bom entre os entrevistados.
 */

import {  get_number, get_number_min_max, print} from '../../utils/input.js'
import { calcular_media, calcular_taxa_percentual } from '../../utils/math.js'


function main() {
    print('Encerrar -> Idade : -1')
    let numero_espectador = 1

    print(`---- Espectador ${numero_espectador} ----`)
    let idade  = get_number('> Idade: ')
    let somatorio_idade_otimo = 0
    let quant_otimo = 0
    let quant_regular = 0
    let quant_bom = 0

    while (idade !== -1) {
        const opiniao = get_number_min_max(obter_opniao(), 1, 4)
        if (opiniao === 1) {
            quant_otimo++
            somatorio_idade_otimo = somatorio_idade_otimo + idade
        } else if (opiniao === 3) {
            quant_regular++
        } else if (opiniao === 2) {
            quant_bom++
        }

        numero_espectador++
        print(`---- Espectador ${numero_espectador} ----`)
        idade = get_number('> Idade: ')
    }

    const media_otimo = calcular_media(somatorio_idade_otimo, quant_otimo)
    const percentual_bom = calcular_taxa_percentual(quant_bom, numero_espectador-1)

    print(`----------------------- RESULTADOS ------------------------------`)
    print(`Espectadores Entrevistados: ${numero_espectador-1}`)
    print(`> Média das idades das pessoas que responderam ótimo: ${media_otimo}`)
    print(`> Quant. de pessoas que respondeu regular: ${quant_regular}`)
    print(`> Percentual de pessoas que respondeu bom entre os entrevistados: ${percentual_bom}%`)

}

function obter_opniao() {
    const opcoes = `
    |------- OPINIÃO -------|
     1 - Otimo
     2 - Bom
     3 - Regular
     4 - Pessimo
    |-----------------------|
    
    >>> `

    return opcoes
}

main()
