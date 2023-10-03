/**
 * F03-Q12
 * Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
 */
import { question } from 'readline-sync'

function main(){
    const quantElementosdaLista = Number(question('Digite um numero: '))
    console.log(`Início - Lista de ${quantElementosdaLista} numeros`)

    let atual = 1
    let somatorioElementos = 0

    while (atual <= quantElementosdaLista){
        let numero = Number(question(`Digite o ${atual}o numero: `))
        somatorioElementos = somatorioElementos + numero
        atual++
    }
    const media = somatorioElementos / quantElementosdaLista

    console.log(`\n> A soma dos elementos da lista é ${somatorioElementos}`)
    console.log(`E a média é ${media}`)
}

main()