/**
 * F04 - 30. Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
 * nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
 * número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
 * a. Até 10 unidades: valor total
 * b. de 11 a 20 unidades: 10% de desconto
 * c. de 21 a 50 unidades: 20% de desconto
 * d. acima de 50 unidades: 25% de desconto
 */

import { get_positive_number, get_text, print } from '../../utils/input.js'

function main() {
    print('> Digite FIM para Encerrar')
    let nome_produto = get_text('>>> Nome do Produto: ')
    
    while (nome_produto !== 'FIM' && nome_produto !== 'fim') {
        const preco_produto = get_positive_number('Preco(R$): ')
        const qtd_comprada = get_positive_number('Quantidade: ')

        let valor_mercadorias = 0
        let desconto = 0
        let valor_total_apagar = 0

        if(qtd_comprada <= 10){
            valor_total_apagar = calcular_valor_mercadorias(preco_produto, qtd_comprada)
            print(`ITEM: ${nome_produto}   ${qtd_comprada}UN x ${preco_produto.toFixed(2)}   VT(R$): ${valor_total_apagar.toFixed(2)}\n`)
            
        }else if(qtd_comprada > 10 && qtd_comprada <= 20){
            valor_mercadorias = calcular_valor_mercadorias(preco_produto, qtd_comprada)
            desconto = calcular_desconto(valor_mercadorias, 10)
            valor_total_apagar = valor_mercadorias - desconto
            print(`ITEM: ${nome_produto}    ${qtd_comprada}UN x ${preco_produto.toFixed(2)}    DESC(R$): ${desconto.toFixed(2)}    VT(R$): ${valor_total_apagar.toFixed(2)}\n`)

        }else if(qtd_comprada > 20 && qtd_comprada <= 50){
            valor_mercadorias = calcular_valor_mercadorias(preco_produto, qtd_comprada)
            desconto = calcular_desconto(valor_mercadorias, 20)
            valor_total_apagar = valor_mercadorias - desconto
            print(`ITEM: ${nome_produto}    ${qtd_comprada}UN x ${preco_produto.toFixed(2)}    DESC(R$): ${desconto.toFixed(2)}    VT(R$): ${valor_total_apagar.toFixed(2)}\n`)

        }else{
            valor_mercadorias = calcular_valor_mercadorias(preco_produto, qtd_comprada)
            desconto = calcular_desconto(valor_mercadorias, 25)
            valor_total_apagar = valor_mercadorias - desconto
            print(`ITEM: ${nome_produto}    ${qtd_comprada}UN x ${preco_produto.toFixed(2)}    DESC(R$): ${desconto.toFixed(2)}    VT(R$): ${valor_total_apagar.toFixed(2)}\n`)

        }

        nome_produto = get_text('\n>>> Nome do Produto: ')
    }

    print(`Total: R$ ${total_final.toFixed(2)}}`)
}


function calcular_valor_mercadorias(valor_unitario, quantidade){
    return valor_unitario * quantidade
}


function calcular_desconto(valor_a_pagar, perc_desconto){
    return valor_a_pagar * (perc_desconto/100)
}

main()
