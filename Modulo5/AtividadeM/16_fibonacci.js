/**
 * F03-Q16
 * Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
 * (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.
 */
import { question } from 'readline-sync'

function main(){
    let numero = obterNumeroMaiorqueDois('Quant de Termos da Sequencia de Fibonacci: ')
    console.log(`> ${numero} primeiros termos de seqüência de Fibonacci`)

    let numeroSequencia = 0
    let primeiroTermo = 0
    let segundoTermo = 1
    let qntTermos = 1
    console.log(primeiroTermo)
    console.log(segundoTermo)
    numero = numero - 2 //os dois primeiros termos já foram mostrados!

    while (qntTermos <= numero){
        numeroSequencia = primeiroTermo + segundoTermo
        primeiroTermo = segundoTermo
        segundoTermo = numeroSequencia
        console.log(segundoTermo)
        qntTermos++
    }
}

function obterNumeroMaiorqueDois(label = 'Digite um numero positivo: '){
    let numero = Number(question(label))

    while (numero < 2){
        console.log('Digite um nº maior ou igual a 2!!!')
        numero = Number(question(label))
    }

    return numero
}

main()
