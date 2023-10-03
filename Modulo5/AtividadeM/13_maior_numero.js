/**
 * F03-Q13
 * Leia N e uma lista de N números e escreva o maior número da lista.
 */

import { question } from 'readline-sync'

function main(){
    const quantElementosdaLista = Number(question('Digite um numero: '))
    console.log(`Início - Lista de ${quantElementosdaLista} numeros`)

    let atual = 1
    let maiorNumero = 0

    while (atual <= quantElementosdaLista){
        let numero = Number(question(`Digite o ${atual}o numero: `))
        if(atual == 1){
            maiorNumero = numero
        }else if( numero > maiorNumero){
            maiorNumero = numero
        }     
        atual++
    }

    console.log()
    console.log(`> O MAIOR NÚMERO DA LISTA É: ${maiorNumero}`)
}

main()