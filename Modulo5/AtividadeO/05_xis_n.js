/**
 * F04 - Q05: Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
 * divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
 * chegar a 2.
 */

import { get_number_min, get_positive_number, print } from "../../utils/input.js"

function main() {
    const numero_x = get_positive_number('Numero X: ')
    const numero_n = get_number_min('Numero N: ', 2)
    let x = numero_x
    let n = numero_n
''
    while (n !== 2) {
       const divisao = x / n

       x = divisao
       n--
    }

    print(`X = ${x}\nN = ${n}`)
}

main()
