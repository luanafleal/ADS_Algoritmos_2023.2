/**
 * F04 -Q27: Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
 * 2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
 * · Média de idade das mulheres;
 * · Média de idade dos homens;
 * · O percentual de homens solteiros;
 * · O percentual de mulheres solteiras;
 * · A quantidade de mulheres divorciadas acima de 30 anos.
 */

import {  clear_screen, get_number_min, get_number_min_max, print, print_inline} from '../../utils/input.js'
import { calcular_media, calcular_taxa_percentual } from '../../utils/math.js'


function main() {
    let numero_pessoas = 1
    let total_mulheres = 0
    let somatorio_idade_mulheres = 0
    let total_homens = 0
    let somatorio_idade_homens = 0
    let quant_homens_solteiros = 0
    let quant_mulheres_solteiras = 0
    let divorciadas_30 = 0


    while (numero_pessoas <= 100) {
        print_inline(`********* ${numero_pessoas}ª Pessoa **********`)
        const sexo  = get_number_min_max(obter_sexo(), 1, 2)
        const idade = get_number_min('\n    IDADE: ', 0)
        const estado_civil = get_number_min_max(obter_estado_civil(), 1, 4)

        if (sexo === 1) {
            total_homens++
            somatorio_idade_homens = somatorio_idade_homens + idade

            if (estado_civil === 2) {
                quant_homens_solteiros++
            }
        } else {
            total_mulheres++
            somatorio_idade_mulheres = somatorio_idade_mulheres + idade

            if (estado_civil === 2) {
                quant_mulheres_solteiras++
            }

            if (idade > 30 && estado_civil === 3) {
                divorciadas_30++
            }
        }
        
        clear_screen()

        numero_pessoas++
    }

    const media_idade_mulheres = calcular_media(somatorio_idade_mulheres, total_mulheres)
    const media_idade_homens = calcular_media(somatorio_idade_homens, total_homens)
    const perc_homens_solteiros = calcular_taxa_percentual(quant_homens_solteiros, total_homens)
    const perc_mulheres_solteiras = calcular_taxa_percentual(quant_mulheres_solteiras, total_mulheres)

    print(`\n> Total Pessoas: ${numero_pessoas - 1}`)
    print(`- Média de idade das mulheres: ${media_idade_mulheres.toFixed(2)}`)
    print(`- Média de idade dos homens: ${media_idade_homens.toFixed(2)}`)
    print(`- Percentual de homens solteiros: ${perc_homens_solteiros.toFixed(2)}`)
    print(`- Percentual de mulheres solteiras: ${perc_mulheres_solteiras.toFixed(2)}`)
    print(`- Quant. mulheres divorciadas(+30 anos): ${divorciadas_30}`)


}

function obter_sexo() {
    const opcoes = `
    SEXO:
     1 - MASCULINO
     2 - FEMININO
    >>> `

    return opcoes
}

function obter_estado_civil() {
    const opcoes = `
    ESTADO CIVIL:
     1 - CASADO(A)
     2 - SOLTEIRO(A)
     3 - DIVORCIADO(A)
     4 - VIUVO(A)
    >>> `

    return opcoes
}


main()
