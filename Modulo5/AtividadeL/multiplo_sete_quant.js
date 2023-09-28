// 5. Faça o mesmo do anterior e diga quantos números fora digitados.

import { question } from "readline-sync";

function main() {
    let numero = Number(question('Numero: '))
    let quant_numeros = 0

    while(!(eh_multiplo_de_sete(numero))) {
        numero = Number(question('Numero: '))
        quant_numeros++
    }

    console.log(`\n> Quantidade de Números Digitados: ${quant_numeros}`)
}

function eh_multiplo_de_sete(numero) {
    return numero % 7 === 0
}

main()
