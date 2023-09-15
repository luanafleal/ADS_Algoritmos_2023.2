/**
 * Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
 * (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
 * formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
 * escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
 */

import { question } from "readline-sync";


function main(){
    console.log('---  Classificação de Triângulo Quanto aos Lados ---')
    const lado1 = Number(question('Lado 1: '))
    const lado2 = Number(question('Lado 2: '))
    const lado3 = Number(question('Lado 3: '))

    const eh_triangulo =lados_formam_triangulo(lado1, lado2, lado3)
    const tipo_triangulo = classificar_triangulo(lado1, lado2, lado3)

    console.log('\nRESULTADO --------------------------------------------')
    if(!eh_triangulo){
        console.log(`> Os lados NÃO formam triângulo!`)
    }else{
        console.log(`> Os lados formam triângulo!\n> Tipo: ${tipo_triangulo}`)
    }
}


function lados_formam_triangulo(lado1, lado2, lado3){
    return lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1
}


function classificar_triangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3){
        return 'Triângulo Equilátero'
    }else if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1){
        return 'Triângulo Isólesceles'
    }else{
        return 'Triângulo Escaleno'
    }
}


main()
