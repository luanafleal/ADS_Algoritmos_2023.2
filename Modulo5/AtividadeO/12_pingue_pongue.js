/**
 * F04 - Q12: Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
 * responda quem ganha a partida. A partida chega ao final se:
 * · Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
 * · Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
 * diferença de 2 pontos sobre o adversário.
 */

import { get_number_min_max, print } from '../../utils/input.js'

function main() {
    let pontos_jogador_1 = 0
    let pontos_jogador_2 = 0


    while (!partida_encerrada(pontos_jogador_1, pontos_jogador_2)) {
        const ponto = obter_ponto()
        ponto === 1 ? pontos_jogador_1++ : pontos_jogador_2++
    }

    const vencedor = pontos_jogador_1 > pontos_jogador_2 ? 'JOGADOR 1' : 'JOGADOR 2'

    print(`Placar: JOGADOR1: ${pontos_jogador_1} x JOGADOR2: ${pontos_jogador_2}`)
    print(`> VENCEDOR: ${vencedor}`)
}

function obter_ponto() {
    return get_number_min_max(`1 - Jogador 1\n2 - Jogador 2\n>>> `, 1, 2)
}

function partida_encerrada(pontos_jogador_1, pontos_jogador_2) {
    let partida_encerrada = false
    if (pontos_jogador_1 >= 21 || pontos_jogador_2 >= 21) {
        const diferenca = Math.abs(pontos_jogador_1 - pontos_jogador_2)
        if (diferenca >= 2) {
            partida_encerrada = true
        }
    }

    return partida_encerrada
}

main()
