/**
 * F02-Q26: Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.
**/

import { question } from "readline-sync";


function main(){
    const lado_1 = Number(question('Primeiro lado: '))
    const lado_2 = Number(question('Segundo lado: '))
    const lado_3 = Number(question('Terceiro lado: '))

    const composicao = identificar_lados(lado_1, lado_2, lado_3)

    console.log(composicao)
}


function encontrar_hipotenusa(lado_1, lado_2, lado_3){
    if (lado_1 > lado_2 && lado_1 > lado_3){ 
        return lado_1
    }else if(lado_2 > lado_1 && lado_2 > lado_3){
        return lado_2
    }else{
        return lado_3
    }
}


function identificar_lados(lado_1, lado_2, lado_3){
    const hipotenusa = encontrar_hipotenusa(lado_1, lado_2, lado_3)
    if(hipotenusa === lado_1){
        return `Hipotenusa: ${lado_1} \nCateto 1: ${lado_2} \nCateto 2: ${lado_3}`
    }else if(hipotenusa === lado_2){
        return `Hipotenusa: ${lado_2} \nCateto 1: ${lado_1} \nCateto 2: ${lado_3}` 
    }else{
        return `Hipotenusa: ${lado_3} \nCateto 1: ${lado_1} \nCateto 2: ${lado_2}` 
    }
}


main()
