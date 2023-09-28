// 7. Faça o mesmo do anterior, e identifique qual foi o nome com menos caracteres.

import { question } from "readline-sync";

function main() {
    let nome = question('Nome: ')
    let nome_menor = nome

    while(nome.length !== 7) {
        nome = question('Nome: ')

        if(nome.length < nome_menor.length){
            nome_menor = nome
        }
    }

    console.log(`> Menor Nome: ${nome_menor}`)
}

main()
