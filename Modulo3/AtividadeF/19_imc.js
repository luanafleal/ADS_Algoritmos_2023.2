/**
 * F02_q19: Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
 * (IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
 * (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
 */

import { question } from "readline-sync";


function main() {
    const altura = Number(question('Altura(m): '))
    const peso = Number(question('Peso(kg): '))

    const imc = calcular_imc(altura, peso)
    const classificacao_imc = classificar_imc(imc)

    console.log(`IMC : ${imc.toFixed(1)} -----------\nSituação: ${classificacao_imc}`)
}


function calcular_imc(altura, peso) {
    return peso / altura**2
}


function classificar_imc(valor_imc) {
    if(valor_imc < 25){
        return 'NORMAL'
    }else if(valor_imc >= 25 && valor_imc <=30){
        return 'OBESO'
    }else{
        return 'OBESIDADE MÓRBIDA'
    }
}

main()
