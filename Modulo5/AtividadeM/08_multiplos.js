/**
 * F-Q8: Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos
 * de N entre os limites lidos.
 */

import { question } from "readline-sync";

function main() {
    const numero = Number(question('Numero: '))
    const limiteInferior = Number(question('Limite Inferior: '))
    const limiteSuperior = Number(question('Limite Superior: '))

    let atual = limiteInferior

    console.log(`Múltiplo(s) de ${numero} entre ${limiteInferior} e ${limiteSuperior}`)

    while (atual <= limiteSuperior){
        if(ehMultiploDe(numero, atual)){
            console.log(atual)
        }
        atual = atual + 1
    }   
}

function ehMultiploDe(numero, valor){
    return valor % numero === 0
}

main()
