/**
 * F04 - Q08: Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
 * quando a soma de dois números consecutivos da lista for igual a X..
 */

import { get_number } from '../../utils/input.js'

function main() {
    const numero = get_number('> Numero: ')
    let numero1_lista = get_number('Digite um numero: ') 
    let numero_n_lista = get_number('Digite um numero: ') 

    let soma = numero1_lista + numero_n_lista

    while (soma !== numero){
        soma = numero_n_lista
        numero_n_lista = get_number('Digite um numero: ')
        soma = soma + numero_n_lista
    }
}

main() 
