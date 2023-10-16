/**
 * F04 - Q03: Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.
 */

import { get_positive_number, print } from '../../utils/input.js'

function main() {
    const num1 = get_positive_number('Numero 1: ')
    const num2 = get_positive_number('Numero 2: ')

    let mdc = num1 < num2 ? num1 : num2

    while (num1 % mdc !== 0 || num2 % mdc !== 0) {
        mdc--
    }

    print(`\nO MDC(${num1}, ${num2}) é ${mdc}`)
}


main()
