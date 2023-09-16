/**
 * F02-Q29: Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
 * formadas pelos seus dois primeiros e dois últimos dígitos.
 * Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
 * Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.
**/

import { question } from "readline-sync";


function main(){
    const numero = Number(question('Digite o numero(4 digitos): '))

    if(verificar_quadrado_perfeito(numero)){
        console.log('QUADRADO PERFEITO!')
    }else{
        console.log('NÃO É QUADRADO PERFEITO!')
    }

}

function verificar_quadrado_perfeito(numero){
    const dois_primeiros_digitos = Math.floor(numero / 100)
    const dois_ultimos_digitos = numero % 100
    const soma = dois_primeiros_digitos + dois_ultimos_digitos
    const raiz_quadrada = Math.sqrt(numero)

    return soma === raiz_quadrada
}

main()