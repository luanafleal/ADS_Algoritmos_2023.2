/**
 * F02_q12: Leia 1 (um) número inteiro e escreva se este número é par ou impar.
 */

import { question } from "readline-sync";


function main(){
    const numero = Number(question('Digite um numero: '))

    if(eh_par(numero)){
        console.log(`O número é PAR!`)
    }else{
        console.log(`O número é ÍMPAR!`)
    }
}


function eh_par(numero){
    return numero % 2 === 0
}

main()
