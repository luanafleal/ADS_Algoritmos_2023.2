/**
 * F04 - Q07: Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.
 */

import { get_number } from '../../utils/input.js'

function main() {
    const numero = get_number('Numero: ')

    let numero_lista = 0

    while (numero_lista !== numero){
        numero_lista = get_number('Digite um numero: ')
    }
}

main()
