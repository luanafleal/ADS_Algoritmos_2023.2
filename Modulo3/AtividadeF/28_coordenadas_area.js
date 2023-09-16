/**
 * F02-Q28: Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
 * um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
 * não pode ser negativo.
**/

import { question } from "readline-sync";


function main(){
    console.log('-- Ponto A --')
    const xA = Number(question('Xa: '))
    const yA = Number(question('Ya: '))
    console.log('-- Ponto B --')
    const xB = Number(question('Xb: '))
    const yB = Number(question('Yb: '))

    const area_retangulo = calcular_area_retangulo(xA, yA, xB, yB)

    console.log('\n> Área do Retângulo:', area_retangulo)
}


function calcular_diferenca(n1, n2){
    if(n1 > n2){
        return n1 - n2
    }
    return n2 - n1 
}


function calcular_area_retangulo(x1, y1, x2, y2){
    const lado1 = calcular_diferenca(x1, x2)
    const lado2 = calcular_diferenca(y1, y2)

    return lado1 * lado2
}


main()
