/**
 * Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
 * Aritmética que tem por valor inicial A0 e razão R.
 */

import { get_number, get_number_min, print } from "../../utils/input.js"

// function main() {
//     let valor_inicial_A0 = get_number('Digite o valor inicial: ')
//     const limite = get_number_min('Digite o Limite: ', valor_inicial_A0)
//     const razao = get_number('Razao: ')

//     for(let i = valor_inicial_A0; i < limite; i+=razao) {
//         print(`> ${i}`)
//         print(`${i+razao}`)
//     }
// }

// main()

function main2(){
    print('--- CALCULADORA - PROGRESSÃO ARITMÉTICA(PA) ---')
    let razao = get_number('Razao da PA: ')
    let valor_inicial_A0 = get_number('Digite o valor inicial: ')
    let limite = obter_limite('Digite o Limite: ', valor_inicial_A0, razao)
    
    for(let i = valor_inicial_A0; i > limite; i+=razao) {
        print(`> ${i}`)
    }

    
}

function obter_limite(label, valor_inicial, razao) {
    let limite = get_number(label)
    const segundo_termo = valor_inicial + (razao)

    while (limite > segundo_termo) {
        print(`ERRO: Digite um numero menor que ${segundo_termo}`)

        limite = get_number(label)
    }
    
    return limite
}


main2()



//se r < 0 PA descrescente  
//r = -2 / vi = 10 / limite = 
//se o R é negativo o valor do limite tem que ser menor que o valor inicial
// get_number(valor razao(r): ) negativo
//se for negativo
// if (r < 0) {
//    const valor_inicial = get_number('inicial')
//    const limite = get_number_minimi()
/**
 * obterlimite(label, valor_inicial){
 *      let limite = get_number(label)
 *      const segundo_termo = valor_inicial + (razao)
 *
 *      while (limite > segundo_termo){
 *              print('ERRO: DIGITE UM NÚMERO MENOR QUE ${segundo_termo}')
 *              
 * 
 *              limite = get_number(label)     
 * }
 * 
 * 
 * }
 */