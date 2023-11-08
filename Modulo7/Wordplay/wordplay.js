import { readFileSync } from 'fs'
import { enter_to_continue, get_number, get_number_min, get_number_min_max, get_positive_number, get_text, print } from '../../utils/input.js'
import {contem_letra, text_to_lower } from '../../utils/strings.js'

function main() {
    const palavras = load_palavras() //chama a funcão que vai ler as palavras
    const qtd = palavras.length //tamanho da lista de palavras
    print(`${qtd} palavras carregadas`)
    
    const menu = `
    ####### WORDPLAY #######
    1 - Palavras com mais de N letras
    2 - Palavras sem a letra "tal" 
    0 - Sair
    >>> `

    let opcao = get_number_min(menu, 0)


    while(opcao != 0) {
        if(opcao === 1) {
            const palavras_filtradas = palavras_com_mais_de_n_letras(palavras)
            mostrar_palavras(palavras_filtradas, 'Palavras Tam Mínimo', qtd)
        } else if(opcao === 2) {
            const palavras_filtradas = filtrar_palavras_sem_letra_e(palavras)
            mostrar_palavras(palavras_filtradas, 'Palavras sem letra "e"', qtd)
        } else if(opcao === 3) {

        } else if(opcao === 4) {

        }

        get_text('Enter...')
        console.clear()
        opcao = get_number_min(menu, 0)
    }
}

function load_palavras() {
    const arquivo = readFileSync('palavras.txt', 'utf-8')
    const linhas = arquivo.split('\n')

    return linhas
}

function palavras_com_mais_de_n_letras(palavras) {
    const cestinha = [] //criou um array que receberá as palavras

    const menu = `
        Digite 1 para 20 letras ou mais
        Digite 2 para informar tamanho
        >>> `
    const opcao = get_number_min_max(menu, 1, 2)
    let limite = 20
    if(opcao === 2){
        limite = get_positive_number('Limite N: ')
    }

    for (let item of palavras) { //ira acessar cada palavra
        if(item.length > limite){//e verificar as maiores que
            cestinha.push(item)//limite e irá colocar no array de n_palavras
        }
    }

    return cestinha
}

function mostrar_palavras(palavras, label, total_palavras){
    print(label)
    print('--------------')
    for (let p of palavras){
        print(p)
    }
    print('--------------')
    const percentual = (palavras.length / total_palavras) * 100
    print(`Quantidade: ${palavras.length}`)
    print(`Percentual: ${percentual.toFixed(3)}%`)
    
}

function filtrar_palavras_sem_letra_e(cesta_palavras){
    const cestinha = []
    const letra_proibida = question('Letra a Evitar: ')

    for(let item of cesta_palavras){
        if(has_no_letter(item, letra_proibida) === true){
            cestinha.push(item)
        }
    }

    return cestinha
}

main()
