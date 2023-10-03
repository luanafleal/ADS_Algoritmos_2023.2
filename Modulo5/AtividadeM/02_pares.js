/**
 * F_Q2: Leia N e escreva todos os números inteiros pares de 1 a N.
 */

import { question } from "readline-sync";

function main() {
    const numero = Number(question('Número: '))
    let cont = 1

    while(cont <= numero) {
        if(eh_par(cont)){
            console.log(`> ${cont}`)
        }
        cont++
    }
}

function eh_par(numero){
    return numero % 2 === 0
}

main()
