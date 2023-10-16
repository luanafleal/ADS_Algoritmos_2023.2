/**
 * F04 - Q29: Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
 * quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
 * investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
 * deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
 * por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
 * Saldo do investimento após 1 ano: 1268.25
 * Deseja processar mais um ano (S/N) ?
 */

import { get_positive_number, get_text, print } from '../../utils/input.js'
import { calcular_juros_compostos } from '../../utils/math.js'

function main(){
    print('---- SIMULADOR DE INVESTIMENTO -----')
    const investimento_mensal = get_positive_number('> InvestimentO Mensal(R$): ')
    const taxa_mensal = get_positive_number('> Taxa de Juros(% a.m): ')
    let contador_ano = 1
    let saldo_investimento = calcular_capital_total(investimento_mensal)
    let processo_ano_seguinte = 'S'

    while(processo_ano_seguinte !== 'N'){
        const capital = saldo_investimento
        saldo_investimento = calcular_juros_compostos(capital, taxa_mensal, 12)

        print('-------------------------------------------------')
        print(`- Saldo do investimento após ${contador_ano} ano(s): R$ ${saldo_investimento.toFixed(2)}`)
        print('-------------------------------------------------')

        processo_ano_seguinte = obter_texto_processo(`\n> Deseja processar mais um ano (S/N)? `)
        

        contador_ano++
    }

}

function calcular_capital_total(investimento_mensal){
    return investimento_mensal * 12
}

function obter_texto_processo(label){
    let texto = get_text(label)

    while(texto !== 'S' && texto !== 'N'){
        print(`- ERRO: Resposta Inválida!\n- Digite S ou N`)

        texto = get_text(label)
    }
    return texto
}

main()