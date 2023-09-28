// 6. Receba diversos nomes do usuário. Pare quando ele digitar um nome com 7 caracteres.

import { question } from "readline-sync";

function main() {
    let nome = question('Nome: ')

    while(nome.length !== 7) {
        nome = question('Nome: ')
    }
}

main()
