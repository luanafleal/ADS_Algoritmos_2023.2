/**
 * F02-Q20: Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante
 * (primeiro, segundo, terceiro ou quarto) em que o ângulo se localiza.
**/

import { question } from "readline-sync";


function main() {
    console.log('----------- Encontre o Quadrante -----------')
    const angulo = Number(question('Digite o angulo(Entre 0 e 360): '))

    const quadrante = encontrarQuadrante(angulo)
    
    console.log(quadrante)
}


function encontrarQuadrante(angulo) {
    if (angulo >= 0 && angulo <=90){
        return '> PRIMEIRO QUADRANTE'
    }else if(angulo > 90 && angulo <= 180){
        return '> SEGUNDO QUADRANTE'     
    }else if(angulo > 180 && angulo <= 270){
        return '> TERCEIRO QUADRANTE'     
    }else if(angulo > 270 && angulo <= 360){
        return '> QUARTO QUADRANTE'  
    }else{
        return 'Digite uma medida entre 0 e 360°'
    }
}


main()
