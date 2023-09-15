/**
 * F02_q01:Leia 3 (três) números,
 * verifique e escreva quantos números iguais existem entre os números.
 */

import { question } from "readline-sync";

function main(){
    // Entrada
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))
    const num3 = Number(question('Terceiro numero: '))

    // Processamento
    const quant_numeros_iguais = contar_numeros_iguais(num1, num2, num3)

    // Saída
    console.log(`Há ${quant_numeros_iguais} números iguais`)
}

function contar_numeros_iguais(num1, num2, num3){
    if(num1 === num2 && num2 === num3){
        return 3
    }else if(num1 === num2 && num2 !== num3){
        return 2
    }else if(num1 === num3 && num1 !== num2 ){
        return 2
    }else if(num2 === num3 && num2 !== num1){
        return 2
    }else{
        return 0
    }
}

main()