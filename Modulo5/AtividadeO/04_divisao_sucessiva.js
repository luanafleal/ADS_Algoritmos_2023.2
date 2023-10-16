/**
 * F04 - Q04: Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
 * resultado da última divisão efetuada.
 */

import { get_positive_number, print } from "../../utils/input.js"

function main() {
    const numero = get_positive_number('Numero: ')

    let resultado = numero

    while (resultado >= 1) {
        resultado = resultado / 2
    }

    print(`Resultado da última divisão = ${resultado}`)
}

main()
