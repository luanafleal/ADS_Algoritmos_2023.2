//F03 - Q01: Leia N e escreva todos os números inteiros de 1 a N.

import { get_positive_number, print } from "../../utils/input.js"

function main(){
    print('-- Números inteiros de 1 a N --')
    const numero = get_positive_number('Digite um Numero: ')//10

    for(let i = 1; i <= numero; i++) {
        print(`> ${i}`)
    }
}

main()