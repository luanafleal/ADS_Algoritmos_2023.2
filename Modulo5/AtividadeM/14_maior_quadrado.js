/**
 * F03_Q14
 * Leia N, calcule e escreva o maior quadrado menor ou
 * igual a N. Por exemplo, se N for igual a 38, o
 * maior quadrado menor que 38 é 36 (quadrado de 6).
 */

import { question } from 'readline-sync'

function main(){
    const valor = Number(question('Limite: ')) 
    let numero = 0

    while (numero * numero <= valor){ 
        numero = numero + 1
    }

    numero = numero - 1
    const quadrado = numero * numero

    console.log(quadrado)
}

main()