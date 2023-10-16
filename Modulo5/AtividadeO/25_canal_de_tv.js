/**
 * F04 -Q25: Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
 * cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
 * estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
 * quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
 * mostrando ao final, o número de cada canal e sua respectiva audiência.
 */

import { clear_screen, get_number_min, get_number_min_max, print} from '../../utils/input.js'
import { calcular_taxa_percentual } from '../../utils/math.js'


function main() {
    print('Encerrar -> Canal : 0')
    let numero_casa = 1

    print(`---- Casa ${numero_casa} ----`)
    let canal = obter_canal('> Canal: ')
    let quant_canal_2 = 0
    let quant_canal_4 = 0
    let quant_canal_5 = 0
    let quant_canal_7 = 0
    let quant_canal_10 = 0
    let total_pessoas = 0

    while (canal !== 0) {
        const numero_pessoas = get_number_min('Quant. Telespectadores: ', 1)
        if (canal === 2) {
            quant_canal_2 = quant_canal_2 + numero_pessoas 
        } else if (canal === 4) {
            quant_canal_4 = quant_canal_4 + numero_pessoas
        } else if (canal === 5) {
            quant_canal_5 = quant_canal_5 + numero_pessoas
        } else if (canal === 7) {
            quant_canal_7 = quant_canal_7 + numero_pessoas
        } else {
            quant_canal_10 = quant_canal_10 + numero_pessoas
        }   

        total_pessoas = total_pessoas + numero_pessoas

        numero_casa++
        print(`\n---- Casa ${numero_casa} ----`)
        canal = obter_canal('> Canal: ')

    }

    const percentual_canal_2 = calcular_taxa_percentual(quant_canal_2, total_pessoas)
    const percentual_canal_4 = calcular_taxa_percentual(quant_canal_4, total_pessoas)
    const percentual_canal_5 = calcular_taxa_percentual(quant_canal_5, total_pessoas)
    const percentual_canal_7 = calcular_taxa_percentual(quant_canal_7, total_pessoas)
    const percentual_canal_10 = calcular_taxa_percentual(quant_canal_10, total_pessoas)

    print(`\nCANAL 2 ---------------------------------------`)
    print(`- Quant. Telespectadores: ${quant_canal_2} - ${percentual_canal_2.toFixed(2)}%`)
    print(`\nCANAL 4 ---------------------------------------`)
    print(`- Quant. Telespectadores: ${quant_canal_4} - ${percentual_canal_4.toFixed(2)}%`)
    print(`\nCANAL 5 ---------------------------------------`)
    print(`- Quant. Telespectadores: ${quant_canal_5} - ${percentual_canal_5.toFixed(2)}%`)
    print(`\nCANAL 7 ---------------------------------------`)
    print(`- Quant. Telespectadores: ${quant_canal_7} - ${percentual_canal_7.toFixed(2)}%`)
    print(`\nCANAL 10 ---------------------------------------`)
    print(`- Quant. Telespectadores: ${quant_canal_10} - ${percentual_canal_10.toFixed(2)}%`)
}

function obter_canal(label) {
    let canal = get_number_min_max(label, 0, 10)

    while (canal !== 0 && canal !== 2 && canal !== 4 && canal !== 5 && canal !== 7 && canal !== 10) {
        print(`>>> Canal Inválido - Escolha(2, 4, 5, 7 ou 10)`)

        canal = get_number_min_max(label, 2, 10) 
    }

    return canal
}


main()
