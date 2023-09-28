/**
 * 8. Peça ao usuário limite inferior, limite superior e então um número.
 *    Mostre cada número entre inferior e superior, inclusive, que seja múltiplo de número.
 */

import { question } from "readline-sync";

function main(){
    console.log(`----- Intervalo de Números -----`)
    const limite_inferior = Number(question('Limite Inferior: '))
    const limite_superior = Number(question('Limite Superior: '))
    const numero_multiplo =  Number(question('Número: '))

    console.log('Intervalo')
    let numero = limite_inferior
    while (numero <= limite_superior){
        console.log(`> ${numero}`)
        numero++
    }

    console.log(`Múltiplos de ${numero_multiplo}`)
    numero = limite_inferior
    while (numero <= limite_superior){
        if(eh_multiplo_de_numero(numero, numero_multiplo)){
            console.log(`> ${numero}`)
        }
        numero++
    }
}

function eh_multiplo_de_numero(candidato, numero){
    return candidato % numero === 0
}

main()