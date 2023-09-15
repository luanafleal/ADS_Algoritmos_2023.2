/**
 * F02_q04:Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
 * do algarismo da unidade.
 */

import { question } from "readline-sync";

function main(){
    const numero = Number(question('Digite um numero(2 digitos): '))

    const dezena = Math.floor(numero/10)
    const unidade = numero % 10

    if(eh_numero_igual(dezena, unidade)){
        console.log(`O algarismo da dezena é igual ao algarismo da unidade! ${dezena} = ${unidade}`)
    }else{
        console.log(`O algarismo da dezena é diferente do algarismo da unidade! ${dezena} ≠ ${unidade}`)
    }
}

function eh_numero_igual(n1, n2){
    return n1 === n2
}

main()
