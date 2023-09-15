/**
 * F02_q02: Leia 2 (dois) números, verifique e escreva
 * o menor e o maior entre os números lidos.
 */

import { question } from "readline-sync";


function main(){
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))

    // Processamento
    const menorNumero = eh_menor_numero(num1, num2)
    
    //Saída
    if(num1 === num2){
        console.log(`> Os números são iguais!`)
    }else if(menorNumero){
        console.log(`> Menor: ${num1}\n> Maior: ${num2}`)
    }else{
        console.log(`> Menor: ${num2}\n> Maior: ${num1}`)
    }
}


function eh_menor_numero(num1, num2){
    return num1 < num2
}


main()
