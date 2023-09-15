/**
 * F02_q11:Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.
 */

import { question } from "readline-sync";

function main(){
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))
    const num3 = Number(question('Terceiro numero: '))
    console.log(`\nOPÇÕES: 1 - Ver Valor do Primeiro Número
        2 - Ver Valor do Segundo Número
        3 - Ver Valor do Terceiro Número`)
    const opcao =  Number(question('Escolha a Opcao > '))

    const valor_opcao_escolhida = valor_opcao(opcao, num1, num2, num3)

    if(opcao !== 1 && opcao !== 2 && opcao !==3){
        console.log('> Opcão Inválida!')
    }else{
        console.log(`> ${valor_opcao_escolhida}`)
    }
}

function valor_opcao(opcao, n1, n2, n3){
    if(opcao === 1){
        return n1
    }else if(opcao === 2){
        return n2
    }else{
        return n3
    }
}

main()
