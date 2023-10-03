/**
 * F_Q3: Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados
 * pela Progressão Aritmética que tem por valor inicial A0 e razão R.
 */

import { question } from "readline-sync";


function main() {
    const valor_inicial = Number(question('A0: '))
    const limite = Number(question('Limite: '))
    const razao = Number(question('Razão: '))

    let item_pA = valor_inicial

    while(item_pA <= limite) {
        console.log(`> ${item_pA}`)
        item_pA = item_pA + razao
    }
}


main()
