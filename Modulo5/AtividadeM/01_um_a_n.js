/**
 * F_Q1: Leia N e escreva todos os números inteiros de 1 a N.
 */

import { question } from "readline-sync";

function main() {
    const numero = Number(question('Número: '))
    let cont = 1

    while(cont <= numero) {
        console.log(`> ${cont}`)
        cont++
    }
}

main()
