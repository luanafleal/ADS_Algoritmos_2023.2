/**
 * Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
 * entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
 * responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
 * entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
 * · a porcentagem de cada candidato;
 * · a porcentagem dos outros candidatos;
 * · a porcentagem de eleitores indecisos;
 * · a porcentagem de votos nulos/brancos;
 * · o total de entrevistados;
 * · uma mensagem indicando a possibilidade ou não de haver 2o turno.
 */

import { enter_to_continue, get_number, print } from '../../utils/input.js'
import chalk from 'chalk'
import { calcular_taxa_percentual } from '../../utils/math.js'


function main() {
    let quant_opiniao = 1
    let votos_serra = 0
    let votos_dilma = 0
    let votos_ciro = 0
    let votos_outros = 0
    let votos_indecisos = 0
    let votos_nulos_brancos = 0
    let opiniao_de_voto = obter_opiniao_de_voto(quant_opiniao)
    enter_to_continue()

    while(opiniao_de_voto !== -1) {
        quant_opiniao++
        if(opiniao_de_voto === 45) {
            votos_serra++
        } else if (opiniao_de_voto === 13) {
            votos_dilma++
        } else if (opiniao_de_voto === 23) {
            votos_ciro++
        } else if (opiniao_de_voto === 98) {
            votos_outros++
        } else if (opiniao_de_voto === 99) {
            votos_indecisos++
        } else if (opiniao_de_voto === 0) {
            votos_nulos_brancos++
        }

        opiniao_de_voto = obter_opiniao_de_voto(quant_opiniao)
        enter_to_continue()
    }
    
    const total_entrevistados = quant_opiniao - 1

    const percentual_ciro = calcular_taxa_percentual(votos_ciro, total_entrevistados)
    const percentual_dilma = calcular_taxa_percentual(votos_dilma, total_entrevistados)
    const percentual_serra = calcular_taxa_percentual(votos_serra, total_entrevistados)
    const percentual_outros = calcular_taxa_percentual(votos_outros, total_entrevistados)
    const percentual_indecisos= calcular_taxa_percentual(votos_indecisos, total_entrevistados)
    const percentual_nulos_brancos = calcular_taxa_percentual(votos_nulos_brancos, total_entrevistados)

    const maioria_absoluta = percentual_serra > 50 || percentual_dilma > 50 || percentual_ciro > 50;

    print('------ RESULTADO DA PESQUISA ---------')
    print(`> Total de Entrevistados: ${total_entrevistados}`)
    print('\n> Porcentagem de Votos')
    print(`- CIRO: ${percentual_ciro.toFixed(2)} %\n- DILMA: ${percentual_dilma.toFixed(2)} %\n- SERRA: ${percentual_serra.toFixed(2)} %`)
    print(`- OUTROS: ${percentual_outros.toFixed(2)} %\n- INDECISOS: ${percentual_indecisos.toFixed(2)} %\n- NULOS/BRANCOS: ${percentual_nulos_brancos.toFixed(2)} %`)

    if (maioria_absoluta) {
        print('\n> Não Haverá Segundo Turno.')
    } else {
        print('\n> Haverá Segundo Turno.')
    }
}

function obter_opiniao_de_voto(quant_opiniao){
    const quant_opiniaoFormatado = chalk.greenBright(quant_opiniao)
    const nome_opiniao = chalk.greenBright('OPINIAO')

    return get_number(`
    ---- ${nome_opiniao} ${quant_opiniaoFormatado} ----
     45 - SERRA
     13 - DILMA
     23 - CIRO GOMES

     99 - INDECISO
     98 - OUTROS
     0  - NULO/BRANCO

     -1 - ENCERRAR
    --------------------
    >>> `)
}

main()