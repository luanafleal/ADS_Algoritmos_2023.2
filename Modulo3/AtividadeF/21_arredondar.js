/**
 * F02-Q21
 * Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
 * maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
 * contrario, é arredondado para o inteiro imediatamente inferior.
**/

import { question } from "readline-sync";


function main(){
    console.log('----------- Arrendodar Número -----------')
    const numero = Number(question('Digite o numero: '))

    const parteDecimal = obter_parte_decimal(numero)
    const arredondamento = arrendodar_numero(numero, parteDecimal)

    console.log('Resultado = ', arredondamento)
}


function obter_parte_decimal(numero){
    return numero - Math.floor(numero)
}

function arrendodar_numero(numero, parteDecimal){
    if(parteDecimal === 0.0){
        return numero
    }else if (parteDecimal >= 0.5){
        return Math.floor(numero) + 1
    }else{
        return Math.floor(numero)
    }
}


main()
