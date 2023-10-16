/**
 * F04 - Q23: Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
 * escreva os N termos da PG. Ler o valor de N.
 */

import { get_number } from "../../utils/input.js";

function main() {
    let primeiro_termo = get_number('Digite o primeiro termo da PG: ')
    let razao = get_number('Digite a razão da PG: ')
    let n = get_number('Digite a quantidade de termos (N): ')

    let i = 0
    let termo_atual = primeiro_termo

    while (i < n) {
        console.log(`> Termo ${i + 1}: ${termo_atual}`)
        termo_atual *= razao
        i++
    }

}


main()
