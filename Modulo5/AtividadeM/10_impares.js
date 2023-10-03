/**
 * F-Q10: Leia LimiteSuperior e LimiteInferior e escreva todos os números impares entre os limites lidos.
 */

import { question } from "readline-sync";

function main() {
    const limiteInferior = Number(question('Limite Inferior: '))
    const limiteSuperior = Number(question('Limite Superior: '))

    let atual = limiteInferior

    console.log(`Números ímpares entre ${limiteInferior} e ${limiteSuperior}`)

    while (atual <= limiteSuperior){
        if(!ehPar(atual)){
            console.log(atual)
        }
        atual = atual + 1
    }   
}

function ehPar(num){
    return num % 2 === 0
}

main()
