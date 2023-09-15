/**
 * F02-q09:Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.
 */

import { question } from 'readline-sync'

function main(){
    const numero = Number(question('Numero(0-100): '))

    if(eh_primo(numero)){
        console.log(`${numero} é primo`)
    }else{
        console.log(`${numero} não é primo`)
    }    
}

function eh_primo(numero){
    if (numero === 1){
       return false
    }else if(numero !== 2 && numero % 2 === 0){
        return false
    }else if(numero !== 3 && numero % 3 === 0){
        return false
    }else if(numero !== 5 && numero % 5 === 0){
        return false
    }else if(numero !== 7 && numero % 7 === 0){
        return false
    }else{
        return true
    }
}

main()