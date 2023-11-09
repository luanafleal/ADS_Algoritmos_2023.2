import { get_number, get_number_min, get_text, print } from './utils/input.js'
import {
    gerar_vetor_automatico,
    mostrar_vetor,
    gerar_vetor_manual,
    load_numeros_do_arquivo,
    menu_vetores,
    mostrar_maior_valor_e_posicao,
    mostrar_menor_valor_e_posicao,
    somar_valores_vetor,
    calcular_media_vetor,
    mostrar_valores_positivos,
    mostrar_valores_negativos} from './vetor_funcionalidades.js'

function main(){

    const menu = `\nEscolha uma opcao para inicializar o vetor
    1 - Inserir Valores Automaticos
    2 - Inserir Valores Manualmente
    3 - Carregar Valores de Arquivo

    >>> `

    let opcao = get_number_min(menu)
    let vetor

    while (opcao !== 0){
        if(opcao === 1){
            print('\n - Gerar Valores Automáticos')
            vetor = gerar_vetor_automatico()
            console.clear()
            mostrar_vetor('VETOR AUTOMATICO', vetor)
            break
        } else if(opcao === 2){
            print('\n - Gerar Valores Manualmente')
            vetor = gerar_vetor_manual()
            mostrar_vetor('VETOR MANUAL', vetor)
            break
        } else if(opcao === 3){
            const nome_do_arquivo = get_text('Nome do Arquivo(arquivo.txt): ')
            vetor = load_numeros_do_arquivo(nome_do_arquivo)
            mostrar_vetor('DADOS DO ARQUIVO', vetor)
            break
        } else{
            print('  \nOpção Invalida')
        }

        opcao = get_number_min(menu)
    }

    opcao = get_number(menu_vetores())

    while (opcao !== 0){
        if(opcao === 1){
            print(`    \n> Quant. Items no Vetor: ${vetor.length} items`)
        }else if(opcao === 2){
            const maior_e_posicao = mostrar_maior_valor_e_posicao(vetor)
            print(maior_e_posicao)
            const menor_e_posicao = mostrar_menor_valor_e_posicao(vetor)
            print(menor_e_posicao)
        }else if(opcao === 3){
            const somatorio = somar_valores_vetor(vetor)
            print(`\n> Somatorio dos Valores: ${somatorio}`)
        }else if(opcao === 4){
            const media_valores = calcular_media_vetor(vetor)
            print(`\n> Média do Valores: ${media_valores.toFixed(3)}`)
        }else if(opcao === 5){
            mostrar_valores_positivos(vetor)
        }else if(opcao === 6){
            mostrar_valores_negativos(vetor)
        }
 
        opcao = get_number(menu_vetores())

    }
}

// function menu_vetores(){
//     return `
//     ------------ MENU - VETOR -------------------
//     1 - Ver Quant. de Itens no Vetor
//     2 - Ver Maior e Menor Valores e Sua Posicoes
//     3 - Somatorio dos Valores
//     4 - Media dos Valores

//     0 - Sair
//     ---------------------------------------------
//     >>> `
// }

// function somar_valores_vetor(vetor){
//     let somatorio = 0
//     for(let item of vetor){
//         somatorio = somatorio + item
//     }

//     return somatorio
// }

// function calcular_media_vetor(vetor){
//     const somatorio = somar_valores_vetor(vetor)
//     return somatorio / vetor.length
// }


// function mostrar_maior_valor_e_posicao(vetor){
//     let maior = -Infinity
//     let posicao_maior

//     for(let i in vetor){
//         if(vetor[i] > maior){
//             maior = vetor[i]
//             posicao_maior = i
//         }
//     }

//     return `> Maior Valor: ${maior} - Posicao: ${posicao_maior}`
// }

// function mostrar_menor_valor_e_posicao(vetor){
//     let menor = Infinity
//     let posicao_menor

//     for(let i in vetor){
//         if(vetor[i] < menor){
//             menor = vetor[i]
//             posicao_menor = i
//         }
//     }

//     return `> Menor Valor: ${menor} - Posicao: ${posicao_menor}`
// }


// function gerar_vetor_automatico(){
//     const vetor = []
//     const qtd = get_number_min('  > Quant. Itens: ', 1)
//     const valor_minimo = get_number('  > Valor Minimo: ')
//     const valor_maximo = get_number('  > Valor Maximo: ')

//     for(let i = 0; i < qtd; i++){
//         const item = obter_aleatorio(valor_minimo, valor_maximo)
//         vetor.push(item)
//     }

//     return vetor
// }

// function obter_aleatorio(maximo, minimo = 0){
//     const valor = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    
//     return valor
// }


// function gerar_vetor_manual(){
//     const vetor = []
//     const qtd = get_number_min('  > Quant. Itens: ', 1)
//     const valor_minimo = get_number('  > Valor Minimo: ')
//     const valor_maximo = get_number('  > Valor Maximo: ')
//     print('\n - Digitar Valores')

//     for(let i = 0; i < qtd; i++){
//         const item = obter_valor_manual(valor_minimo, valor_maximo)
//         vetor.push(item)
//     }

//     return vetor

// }

// function obter_valor_manual(minimo, maximo){
//     let valor = get_number('  > ')

//     while(valor > maximo || valor < minimo){
//         print(`'Erro: Fora do Intervalo(${minimo}-${maximo})`)
//         valor = get_number('  > ')
//     }

//     return valor
// }


// function load_numeros_do_arquivo(nome_do_arquivo){
//     const conteudo = readFileSync(nome_do_arquivo, 'utf-8')
//     const linhas = conteudo.split('\n')

//     const numeros = [];
//     for(let linha of linhas){
//         const numero = Number(linha)
//         if(!isNaN(numero)){
//             numeros.push(numero)
//         }
//     }

//     return numeros
// }


// function mostrar_vetor(label, vetor){
//     print(`\n------ ${label} --------`)
//     print(vetor)
// }


main()
