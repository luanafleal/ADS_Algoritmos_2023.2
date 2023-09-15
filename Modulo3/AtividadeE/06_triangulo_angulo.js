/**
 * Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
 * se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
 * verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
 * obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).
 */

import { question } from "readline-sync";


function main(){
    console.log('---  Classificação de Triângulo Quanto aos Ângulos ---')
    const angulo1 = Number(question('Angulo 1: '))
    const angulo2 = Number(question('Angulo 2: '))
    const angulo3 = Number(question('Angulo 3: '))

    const eh_triangulo = angulos_formam_triangulo(angulo1, angulo2, angulo3)
    const tipo_triangulo = classificar_triangulo(angulo1, angulo2, angulo3)

    console.log('\nRESULTADO --------------------------------------------')
    if(!eh_triangulo){
        console.log(`> Os ângulos NÃO formam triângulo!`)
    }else{
        console.log(`> Os ângulos formam triângulo!\n> Tipo: ${tipo_triangulo}`)
    }
}


function angulos_formam_triangulo(ang1, ang2, ang3){
    return ang1 + ang2 + ang3 === 180
}


function classificar_triangulo(ang1, ang2, ang3){
    if(ang1 < 90 && ang2 < 90 && ang3 < 90){
        return 'Triângulo Acutângulo'
    }else if(ang1 === 90 || ang2 === 90 || ang3 === 90){
        return 'Triângulo Retângulo'
    }else{
        return 'Triângulo Obtusângulo'
    }
}


main()
