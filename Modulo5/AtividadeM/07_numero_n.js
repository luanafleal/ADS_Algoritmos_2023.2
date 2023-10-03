/**
 * F_Q7: Leia um número N, some todos os números inteiros entre 1 e N e
 * escreva o resultado obtido.
 */

import { question } from "readline-sync";

function main() {
    const numero = Number(question('Numero: '))
    let somatorio = 0
    let atual = 0

    while(atual < numero) {
        atual = atual + 1
        somatorio = somatorio + atual 
    }

    console.log(`Somatório de 1 a ${numero} = ${somatorio}`)
}

main()
