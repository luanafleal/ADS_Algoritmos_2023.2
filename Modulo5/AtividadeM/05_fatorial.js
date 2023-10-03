/**
 * F_Q5: Leia um número, calcule e escreva seu fatorial.
 */

import { question } from "readline-sync";

function main(){
    console.log('-- Calcular Fatorial --')
    const numero = Number(question('Numero: '))

    let atual = numero
    let fatorial = 1

    while (atual > 1){
        fatorial = fatorial * atual
        atual = atual - 1
    }

    console.log(`> ${fatorial}`)
}


main()
