// 4. Peça diversos números ao usuário até que ele digite um número múltiplo de 7

import { question } from "readline-sync";

function main() {
    let numero = Number(question('Número: '))

    while(!(eh_multiplo_de_sete(numero))) {
        numero = Number(question('Numero: '))
    }
}

function eh_multiplo_de_sete(numero) {
    return numero % 7 === 0
}

main()
