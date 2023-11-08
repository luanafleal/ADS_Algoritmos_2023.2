import { readFileSync } from 'fs'
import { get_number, get_number_min, print } from './utils/input.js';


function main(){

    const menu = `Escolha uma opção para inicializar o vetor
    1 - Inserir Valores Automaticos
    2 - Inserir Valores Manualmente
    3 - Carregar Valores de Arquivo
    >>> `

    let opcao = get_number_min(menu)

    while (opcao !== 0){
        if(opcao === 1){
            print('\n - Gerar Valores Automáticos')
            const vetor_aleatorio = gerar_vetor_automatico()
            mostrar_vetor(vetor_aleatorio)
        } else if(opcao === 2){
            print('\n - Gerar Valores Manualmente')
            const vetor_manual = gerar_vetor_manual()
            mostrar_vetor(vetor_manual)
        } else if(opcao === 3){
            const vetor_arquivo = load_numeros_do_arquivo()
            mostrar_vetor(vetor_arquivo)
        }

        opcao = get_number_min(menu)
    }
}

function load_numeros_do_arquivo(){
    const conteudo = readFileSync('numeros_primos.txt', 'utf-8')
    console.log(`conteudo: ${conteudo}`)
    const numeros = conteudo.split('\n')
    console.log('numeros', numeros)
    console.log('type', typeof numeros)
    return numeros
}


function gerar_vetor_automatico(){
    const vetor = []
    const qtd = get_number_min('  > Quant. Itens: ', 1)
    const valor_minimo = get_number('  > Valor Minimo: ')
    const valor_maximo = get_number('  > Valor Maximo: ')

    for(let i = 0; i < qtd; i++){
        const item = obter_aleatorio(valor_minimo, valor_maximo)
        vetor.push(item)
    }

    return vetor
}

function gerar_vetor_manual(){
    const vetor = []
    const qtd = get_number_min('  > Quant. Itens: ', 1)
    const valor_minimo = get_number('  > Valor Minimo: ')
    const valor_maximo = get_number('  > Valor Maximo: ')
    print('\n - Digitar Valores')

    for(let i = 0; i < qtd; i++){
        const item = obter_valor_manual(valor_minimo, valor_maximo)
        vetor.push(item)
    }

    return vetor

}

function obter_valor_manual(minimo, maximo){
    let valor = get_number('  > ')

    while(valor > maximo || valor < minimo){
        print(`'Erro: Fora do Intervalo(${minimo}-${maximo})`)
        valor = get_number('  > ')
    }

    return valor
}

function obter_aleatorio(maximo, minimo = 0){
    const valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    return valor
}

function mostrar_vetor(vetor){
    console.log('------ VETOR -------')
    for(let item of vetor){
        print(item)
    }
    console.log()
}

main()