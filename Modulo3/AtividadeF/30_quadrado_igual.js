/**
 * F02-Q30: Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
 * o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
 * milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
 * terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
 * 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.
**/

import { question } from "readline-sync";


function main(){
    const numero = Number(question('Digite o numero(4 digitos): '))

    if(verificar_numero(numero)){
        console.log('O número obedece a característica!')
    }else{
        console.log('O número não obedece a caracterísca!')
    }

}


function verificar_numero(numero){
    const num1 = Math.floor(numero / 100)
    const num2 = numero % 100
    const soma = num1 + num2

    return soma**2 === numero

}

main()
