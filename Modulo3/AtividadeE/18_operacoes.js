/**
 * F02_q18: Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.
 */

import { question } from "readline-sync";


function main(){
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))
    console.log(`\nOperacões: 1 - Adição
           2 - Substração
           3 - Multiplição
           4 - Divisão`)
    const operacao = Number(question('Escolha a operacao > '))

    const operador = identificar_simbolo(operacao)
    const resultado = calcular_operacao(operacao, num1, num2)

    if(!resultado){
        console.log('\n> Operação Inválida!')
    }else{
        console.log(`\n> RESULTADO: ${num1} ${operador} ${num2} = ${resultado}`)
    }
}


function calcular_operacao(operacao, n1, n2){
    if(operacao === 1){
        return n1 + n2
    }else if(operacao === 2){
        return n1 - n2
    }else if(operacao === 3){
        return n1 * n2
    }else if(operacao === 4){
        return n1 / n2
    }else{
        return false
    }
}


function identificar_simbolo(operacao){
    if(operacao === 1){
        return '+'
    }else if(operacao === 2){
        return '-'
    }else if(operacao === 3){
        return 'x'
    }return '/'
}


main()
