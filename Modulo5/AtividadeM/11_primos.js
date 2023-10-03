/**
 * F-Q11: Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
 */

import { question } from "readline-sync";

function main() {
    const limiteInferior = Number(question('Limite Inferior: '))
    const limiteSuperior = Number(question('Limite Superior: '))

    let atual = limiteInferior

    console.log(`Números primos entre ${limiteInferior} e ${limiteSuperior}`)

    while (atual <= limiteSuperior){
        if (ehPrimo(atual)){
            console.log(`> ${atual}`)
        }
        atual++
    }
}

function ehPrimo(numero){
    if (numero <= 0) return false

    return contarDivisores(numero) === 2
}

function contarDivisores(numero){
    let contador = 0
    let atual = 1

    while (atual <= numero){
        if (ehDivisor(atual, numero)){
            contador++
        }
        atual++
    }

    return contador
}

function ehDivisor(candidato, numero){
    return numero % candidato === 0
}

main()
