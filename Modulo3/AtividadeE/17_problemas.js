/**
 * F02_q17:Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
 * escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
 * são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
 * divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
 * escreva o quadrado dos números lidos.
 */

import { question } from "readline-sync";


function main(){
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))

    if (num2 === 0) {
        console.log("> Não é possível fazer a operação porque o segundo número é zero!");
        return
    }

    const resto = calcular_resto(num1, num2)

    if(resto === 1){
        const resultado = num1 + num2 + resto
        console.log(`RESTO = ${resto}\n> ${num1} + ${num2} + ${resto} = ${resultado}`)
    }else if(resto === 2){
        
        if(eh_par(num1)){
            console.log(`Número 1: ${num1} é PAR!`)
        }else{
            console.log(`Número 1: ${num1} é ÌMPAR!`)
        }
        if(eh_par(num2)){
            console.log(`Número 2: ${num2} é PAR!`)
        }else{
            console.log(`Número 2: ${num2} é ÌMPAR!`)
        }

    }else if(resto === 3){
        const resultado = (num1 + num2) * num1
        console.log(`RESTO = ${resto}\n> ${num1} + ${num2} * ${num1} = ${resultado}`)
    }else if(resto === 4){
        if (num2 !== 0) {
            const resultado = (num1 + num2) / num2
            console.log(`RESTO = ${resto}\n> ${num1} + ${num2} / ${num2} = ${resultado}`)
        } else {
            console.log("Divisão por zero não é permitida.");
        }
    }else{
        console.log(`Quadrado Número 1 = ${num1**2}\nQuadrado Número 2 = ${num2**2}`)
    }
    
}


function calcular_resto(num1, num2){
    return num1 % num2
}


function eh_par(numero){
    return numero % 2 === 0
}


main()
