/**
 * F04 - Q06: Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
 * divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
 * chegar a 2.
 */

import { get_positive_number, print } from "../../utils/input.js"

function main() {
    const numero = get_positive_number('Numero: ')

    let quant_digitos = contar_digitos(numero)

    print(`Quant. Dígitos = ${quant_digitos}`)
}

function contar_digitos(numero){
    let divisao = numero
    let contador_digitos = 0 

    while(divisao >= 1){
        divisao = divisao / 10
        contador_digitos++
    }

    return contador_digitos
    
}

main()
