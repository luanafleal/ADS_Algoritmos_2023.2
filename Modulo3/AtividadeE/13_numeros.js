/**
 * Leia 5 (cinco) números inteiros e escreva o maior e o menor deles.
 * Considere que todos os valores são diferentes.
 */
import { question } from "readline-sync";


function main(){
    console.log('Digite 5 números diferentes')
    const num1 = Number(question('Primero Numero: '))
    const num2 = Number(question('Segundo Numero: '))
    const num3 = Number(question('Terceiro Numero: '))
    const num4 = Number(question('Quarto Numero: '))
    const num5 = Number(question('Quinto Numero: '))

    const numero_maior = maior_valor(num1, num2, num3, num4, num5)
    const numero_menor = menor_valor(num1, num2, num3, num4, num5)

    console.log(`Maior Valor: ${numero_maior}\nMenor Valor: ${numero_menor}`)
}


function maior_valor(n1, n2, n3, n4, n5){
    if(n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5 ){
        return n1
    }else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5 ){
        return n2
    }else if(n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5 ){
        return n3
    }else if(n4 > n1 && n4 > n3 && n4 > n3 && n4 > n5 ){
        return n4
    }else if(n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4 ){
        return n5
    }
}


function menor_valor(num1, num2, num3, num4, num5){
    if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 ){
        return num1
    }else if(num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5 ){
        return num2
    }else if(num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5 ){
        return num3
    }else if(num4 < num1 && num4 < num3 && num4 < num3 && num4 < num5 ){
        return num4
    }else if(num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4 ){
        return num5
    }
}


main()
