/**
 * F04 - Q01: Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
 * divisores. (flag número = 0).
 */

import { get_number, print, print_inline } from '../../utils/input.js'

function main() {
    print('> 0 - Encerrar')
    let numero = get_number('>>> Numero: ')
    
    while (numero !== 0) {
        print('---------------------')
        print(`> Número Digitado: ${numero}`)
        print_inline('Divisores: ')

        let contador = 1
        while (contador <= numero) {
            if(eh_divisor(numero, contador)){
                print_inline(` ${contador} |`)
            }
            contador++
        }

        numero = get_number('\n>>>  Numero: ')
    }
}

function eh_divisor(numero, candidato){
    return numero % candidato === 0
}

main()
