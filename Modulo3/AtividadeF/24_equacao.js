/**
 * F02-Q24: Leia os coeficientes (A, B e C) de uma equações de 2°
 * grau e escreva suas raízes. Vale lembrar que o
 * coeficiente A deve ser diferente de 0 (zero).
**/

import { question } from "readline-sync";


function main(){
    const coef_a = Number(question('Coeficiente A: '))
    const coef_b = Number(question('Coeficiente B: '))
    const coef_c = Number(question('Coeficiente C: '))

    const raiz = encontrar_raizes(coef_a, coef_b, coef_c)

    console.log(raiz)
}


function calcular_delta(a, b, c) {
    return b**2 - 4 * a * c
}


function encontrar_raizes(a, b, c){
    const delta = calcular_delta(a, b, c)
    if(delta >= 0){
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
        return `x' = ${raiz1.toFixed(2)} \nx" = ${raiz2.toFixed(2)}`
    }else{
        return 'A equação não possui raízes reais'
    }
}


main()