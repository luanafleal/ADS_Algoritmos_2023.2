/**
 * F04 - Q21: Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
 * seja utilizado.
 */


import { get_number, print } from "../../utils/input.js"

function main() {
    const multiplicando = get_number('Multiplicando: ')
    const multiplicador = get_number('Multiplicador: ')

    let produto = 0
    let contador = 0

    while (contador < multiplicador) {
        produto = produto + multiplicando

        contador++
    }

    print(`> ${multiplicando} X ${multiplicador} = ${produto}`)
}

main()