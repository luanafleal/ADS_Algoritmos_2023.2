/**
 * F04 - q28: Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
 * e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
 * digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
 * um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
 * escreva em quantas tentativas o usuário acertou.
 * 
 */

import { get_number_min, print } from "../../utils/input.js"
import { eh_maior } from "../../utils/math.js"


function main() {
    print('----- Descubra o número secreto! ------')
    const numero_aleatorio = Math.floor(Math.random() * 100)
    let numero_digitado = get_number_min('Digite um numero(0-100): ', 0)
    let contador_tentativas = 1

    while (numero_digitado !== numero_aleatorio) {
        if (eh_maior(numero_aleatorio, numero_digitado)) {
            print('>>> O número secreto é MAIOR!')
        } else {
            print('>>> O número secreto é MENOR!')
        }

        numero_digitado = get_number_min('\nDigite um numero(0-100): ', 0)

        contador_tentativas++
    }
     
    print(`\nPARABÉNS! Você descobriu!`)
    print(`Nº de Tentativas: ${contador_tentativas}`)
}

main()
