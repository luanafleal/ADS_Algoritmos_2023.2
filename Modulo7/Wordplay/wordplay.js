import { readFileSync } from 'fs'
import { enter_to_continue, get_number, print } from '../../utils/input.js'

function main() {
    const palavras = load_palavras()
    let opcao = get_number(menu(palavras.length))

    while(opcao != 0) {
        if(opcao === 1) {
            mostrar_palavras_20_letras(palavras)
        } else if(opcao === 2) {
            mostrar_palavras_sem_E(palavras)
        }

        enter_to_continue()
        opcao = get_number(menu(palavras.length))
    }
}

function load_palavras() {
    const arquivo = readFileSync('palavras.txt', 'utf-8')
    const palavras = arquivo.split('\n')

    return palavras
}

function menu(qtd_palavras) {
    return `
    ******** WORDPLAY *********
    ${qtd_palavras} palavras carregadas
    -----------------------------------
    1 - Palavras com mais de 20 letras
    2 - Palavras sem a letra 'e'

    0 - Sair
    >>> `
}

function mostrar_palavras_20_letras(palavras) {
    for (let palavra of palavras) {
        if(palavra.length > 20){
            print(palavra)
        }
    }
}


function has_no_e(palavras) {
    for(let palavra of palavras) {
        for(let index in palavra) {
            if(palavra[index] === 'e'){
                
            } else {
                return false
            }
        }
    }
}

function mostrar_palavras_sem_E(palavras){
    if(has_no_e(palavras)){
        for(let palavra of palavras){
            print(palavra)
        }
    }
}



main()

/**
 * Escreva uma função chamada has_no_e que retorne True
 * se a palavra dada não tiver a letra “e” nela.
 * Altere seu programa na seção anterior para imprimir apenas
 * as palavras que não têm “e” e calcule a porcentagem de palavras
 * na lista que não têm “e”.
 */