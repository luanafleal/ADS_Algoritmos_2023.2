import { readFileSync } from 'fs'
import { get_number, get_number_min, print } from './utils/input.js'


export function menu_vetores(){
    return `
    ------------ MENU - VETOR -------------------
    1 - Ver Quant. de Itens no Vetor
    2 - Ver Maior e Menor Valores e Sua Posicoes
    3 - Somatorio dos Valores
    4 - Media dos Valores
    5 - Mostrar Valores Positivos e Quantidade
    6 - Mostrar Valores Negativos e Quantidades


    0 - Sair
    ---------------------------------------------
    >>> `
}

export function mostrar_valores_positivos(vetor){
    const positivos = []
    let quant_positivos = 0

    for(let i = 0; i < vetor.length; i++){
        const valor = vetor[i]
        if(valor > 0){
            positivos.push(valor)
            quant_positivos++
        }
    }

    print(`\n> Valores Positivos: ${positivos}`)
    print(`> Quant. Positivos: ${quant_positivos}`)
}

export function mostrar_valores_negativos(vetor){
    const negativos = []
    let quant_negativos = 0

    for(let i = 0; i < vetor.length; i++){
        const valor = vetor[i]

        if(valor < 0){
            negativos.push(valor)
            quant_negativos++
        }
    }

    print(`\n> Valores Negativos: ${negativos}`)
    print(`> Quant. Negativos: ${quant_negativos}`)
}

export function somar_valores_vetor(vetor){
    let somatorio = 0
    for(let item of vetor){
        somatorio = somatorio + item
    }

    return somatorio
}

export function calcular_media_vetor(vetor){
    const somatorio = somar_valores_vetor(vetor)
    return somatorio / vetor.length
}


export function mostrar_maior_valor_e_posicao(vetor){
    let maior = -Infinity
    let posicao_maior

    for(let i in vetor){
        if(vetor[i] > maior){
            maior = vetor[i]
            posicao_maior = i
        }
    }

    return `\n> Maior Valor: ${maior} - Posicao: ${posicao_maior}`
}

export function mostrar_menor_valor_e_posicao(vetor){
    let menor = Infinity
    let posicao_menor

    for(let i in vetor){
        if(vetor[i] < menor){
            menor = vetor[i]
            posicao_menor = i
        }
    }

    return `> Menor Valor: ${menor} - Posicao: ${posicao_menor}\n`
}


export function gerar_vetor_automatico(){
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

export function obter_aleatorio(maximo, minimo = 0){
    const valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    
    return valor
}


export function gerar_vetor_manual(){
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

export function obter_valor_manual(minimo, maximo){
    let valor = get_number('  > ')

    while(valor > maximo || valor < minimo){
        print(`'Erro: Fora do Intervalo(${minimo}-${maximo})`)
        valor = get_number('  > ')
    }

    return valor
}


export function load_numeros_do_arquivo(nome_do_arquivo){
    const conteudo = readFileSync(nome_do_arquivo, 'utf-8')
    const linhas = conteudo.split('\n')

    const numeros = [];
    for(let linha of linhas){
        const numero = Number(linha)
        if(!isNaN(numero)){
            numeros.push(numero)
        }
    }

    return numeros
}


export function mostrar_vetor(label, vetor){
    print(`\n------ ${label} --------`)
    print(vetor)
}
