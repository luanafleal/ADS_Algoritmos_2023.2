/**
 * F04 - Q09: Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
 * prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
 * quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
 * clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
 * 1º Lugar - 9 Pts / 2º Lugar - 6 Pts / 3º Lugar - 4 Pts / 4º Lugar - 3 Pts
 * Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor.
 */

import { get_number_min, get_positive_number, get_text, print } from '../../utils/input.js'
import { eh_maior } from '../../utils/math.js'

function main() {
    let numero_prova = get_number_min('> Numero da Prova: ')
    let quant_nadadores = get_number_min('> Quant. Nadadores: ')
    print('-----------------------')

    let quant_pontos_clube_a = 0
    let quant_pontos_clube_b = 0
    let quant_pontos_nadador = 0

    while (numero_prova !== 0 || quant_nadadores !== 0){
        while (quant_nadadores > 0) {
            const nadador_nome = get_text('Nome Nadador: ')
            const classificacao = get_number_min('Classificacao: ', 1)
            if (classificacao === 1) {
                quant_pontos_nadador = 9
            } else if (classificacao === 2) {
                quant_pontos_nadador = 6
            } else if (classificacao === 3) {
                quant_pontos_nadador = 4
            } else {
                quant_pontos_nadador = 3
            }
            const tempo = get_positive_number('Tempo: ')
            const clube = get_text('Clube(A ou B): ')
            if (clube === 'A') {
                quant_pontos_clube_a = quant_pontos_clube_a + quant_pontos_nadador
            } else {
                quant_pontos_clube_b = quant_pontos_clube_b + quant_pontos_nadador
            }
            print('-----------------------')

            quant_nadadores--
        }

        numero_prova = get_number_min('> Numero da Prova: ')
        quant_nadadores = get_number_min('> Quant. Nadadores: ')
        print('-----------------------')

    }

    const vencedor = eh_maior(quant_pontos_clube_a, quant_pontos_clube_b)

    print('----- RESULTADO ---------')
    print(`CLUBE A - Pontos: ${quant_pontos_clube_a}`)
    print(`CLUBE B - Pontos: ${quant_pontos_clube_b}`)
    if (vencedor) {
        print('Clube Vencedor: CLUBE A')
    } else {
        print('Clube Vencedor: CLUBE B')
    }
}

main()
