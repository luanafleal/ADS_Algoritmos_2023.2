/**
 * F02_q014: Leia 5 (cinco) números inteiros, calcule a sua média e
 * escreva os que são maiores que a média.
 */
import { question } from "readline-sync";


function main(){
    const num1 = Number(question('Primero Numero: '))
    const num2 = Number(question('Segundo Numero: '))
    const num3 = Number(question('Terceiro Numero: '))
    const num4 = Number(question('Quarto Numero: '))
    const num5 = Number(question('Quinto Numero: '))

    const media = calcular_media_aritmetica(num1, num2, num3, num4, num5)

    console.log(`\nMÉDIA: ${media}\nValores Maiores que a Média`)
    if(num1 > media){
        console.log(`> ${num1}`)
    }
    if(num2 > media){
        console.log(`> ${num2}`)
    }
    if(num3 > media){
        console.log(`> ${num3}`)
    }
    if(num4 > media){
        console.log(`> ${num4}`)
    }
    if(num5 > media){
        console.log(`> ${num5}`)
    }
}


function calcular_media_aritmetica(n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n4 + n5) / 5
}


main()
