/**
 * F02_q03: Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
 */

import { question } from "readline-sync";


function main(){
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))
    const num3 = Number(question('Terceiro numero: '))

    const maior_numero = obter_maior_numero(num1, num2, num3)

    console.log(`> Maior Número: ${maior_numero}`)
}


function obter_maior_numero(n1, n2, n3){
    if(eh_maior(n1, n2, n3)){
        return n1
    }else{
        if(n2 > n3){
            return n2
        }else{
            return n3
        }
    }
}


function eh_maior(n1, n2, n3){
    return n1 >= n2 && n1 >= n3
}


main()