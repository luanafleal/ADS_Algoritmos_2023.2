/** A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados
*  sobre o salário e número de filhos. Escreva um algoritmo que leia o salário e o
*  número de filhos de N habitantes e escreva: a) média de salário da população;
*  b) média de número de filhos; c) percentual de pessoas com salário de até R$ 1.000,00.
*/

import { print, get_positive_number } from "../../utils/input.js"
import { calcular_media } from "../../utils/math.js"

function main() {
    print('------ PESQUISA -------')
    let qtd_habitantes = get_positive_number('Quant. Habitantes: ')

    let somatorio_salario = 0
    let somatorio_filhos = 0

    while(qtd_habitantes > 0){
        const salario = get_positive_number('Salário(R$): ')
        const qtd_filhos = get_positive_number('Salário(R$): ')

        somatorio_salario = somatorio_salario + salario
        somatorio_filhos = somatorio_filhos + qtd_filhos

        qtd_habitantes--
    }

    const media_salarial = calcular_media(somatorio_salario, qtd_habitantes)
    const media_filhos = calcular_media(somatorio_filhos, qtd_habitantes)

    print(`Média Salaria da População: ${media_salarial.toFixed(2)}`)
    print(`Média de Filhos: ${media_filhos.toFixed(1)}`)



}

main()
