/**
 * F04 - Q24: Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e
 * escreva os N termos da PA. Ler o valor de N.
 */

import { get_number, print } from "../../utils/input.js";


function main() {
    let primeiro_termo, razao, n
    let input_valido = false

    while (!input_valido) {
        primeiro_termo = get_number('Digite o primeiro termo da PA: ')
        razao = get_number('Digite a razão da PA: ')
        n =get_number('Digite a quantidade de termos (N): ')

        if (!isNaN(primeiro_termo) && !isNaN(razao) && !isNaN(n)) {
            input_valido = true;
        } else {
            print('Por favor, insira valores numéricos válidos.')
        }
    }

    let i = 0
    let termo_atual = primeiro_termo

    while (i < n) {
        console.log(`Termo ${i + 1}: ${termo_atual}`)
        termo_atual += razao
        i++
    }
}


main()
