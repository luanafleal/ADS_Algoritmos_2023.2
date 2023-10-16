/**
 * F04 - Q22: Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
 * de divisão (/ e %) sejam utilizados.
 */

import { get_number_min, get_positive_number, print } from "../../utils/input.js"


function main() {
    const dividendo = get_positive_number('Dividendo: ')
    const divisor = get_number_min('Divisor: ', 1)

    let multiplicacao = divisor
    let contador = 1

    while (multiplicacao < dividendo) {
      contador++
      multiplicacao = divisor * contador
    }

    let resto = 0
    
    if(multiplicacao !== dividendo){
        contador--
        resto = dividendo - (contador * divisor)
    }

    print(`Resultado: ${contador}`)
    print(`Resto: ${resto}`)
}


main()
