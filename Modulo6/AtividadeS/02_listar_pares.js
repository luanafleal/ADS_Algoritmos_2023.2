//F03 - Q02: Leia N e escreva todos os números inteiros pares de 1 a N.

import { get_positive_number, print  } from "../../utils/input.js"

function main() {
    print('----  Números inteiros pares de 1 a N ----')
    const numero = get_positive_number('Digite um numero: ')

    for(let i = 1; i <= numero; i++) {
        if(eh_par(i)){
            print(`> ${i}`)
        }
    }
}

function eh_par(numero) {
    return numero % 2 === 0
}

main()
