import { question } from 'readline-sync'

function main(){
    console.log('---- SIMULADOR - CONSÓRCIO ----')
    const valor_veiculo = Number(question('Valor do Bem(R$): ')) 
    const prazo_pagamento = Number(question('Prazo(meses): ')) 
    const taxa_adm = Number(question('Taxa de Administracao(%): ')) 
    const lance = Number(question('Lance Proposto(R$): '))
    const manter_prazo_parcela = (question('Manter "prazo" ou "parcela": ')) 
    const renda_mensal = Number(question('Renda Mensal: '))

    
    const valor_taxa_adm = calcular_porcentagem(valor_veiculo, taxa_adm)
    const valor_total = valor_veiculo + valor_taxa_adm
    const valor_parcelas = calcular_parcelas(valor_total, prazo_pagamento)
    const resgate_aprovado = verificar_aprovacao(renda_mensal, valor_parcelas)
    const renda_min_resgate = calcular_porcentagem(valor_parcelas, 30)
    const novo_prazo = calcular_novo_prazo(valor_total, lance, valor_parcelas)
    const ultima_parcela_manter_prazo = verificar_ultima_parcela_em_manter_prazo(valor_total, lance, novo_prazo, valor_parcelas)
    const nova_parcela = calcular_nova_parcela(valor_total, lance, prazo_pagamento)


    console.log('------------ Resultado -----------')
    console.log(`Valor das Parcelas: ${prazo_pagamento} X de R$ ${valor_parcelas.toFixed(2)}`)
    console.log(`Total a Pagar: R$ ${valor_total.toFixed(2)}`)
    console.log(`Total Taxa de Administração: R$ ${valor_taxa_adm.toFixed(2)}`)
    if(resgate_aprovado){
        console.log()
        console.log('>> Resgate Aprovado!') 
    }else{
        console.log()
        console.log('> Sua renda não é suficiente para o regaste.')
        console.log(`> Renda Mínima: R$ ${renda_min_resgate}`)
    }
   
    if(lance > 0){
        console.log(`> Situação | Lance: R$ ${lance.toFixed(2)} - Mantendo: ${manter_prazo_parcela}`)
        if(manter_prazo_parcela === 'prazo'){
            console.log(`Novo Valor das Parcelas: ${prazo_pagamento} X de R$ ${nova_parcela.toFixed(2)}`)
        }else if(manter_prazo_parcela === 'parcela'){
            console.log(`Novo Prazo: ${novo_prazo}x de ${valor_parcelas.toFixed(2)} + 1x R$ ${ultima_parcela_manter_prazo.toFixed(2)}`)
        }
        console.log('-------------------------------') 
    }
}


function calcular_porcentagem(valor, percentual){
    return valor * percentual / 100
}


function calcular_parcelas(total_a_pagar, prazo){
    return total_a_pagar / prazo
}


function verificar_aprovacao(renda, parcela){
    return parcela <= calcular_porcentagem(renda, 30) 
}


function calcular_nova_parcela(valor_a_pagar, lance, prazo){ 
    return ((valor_a_pagar - lance) / prazo)
}


function calcular_novo_prazo(valor_a_pagar, lance, parcelas){
    return Math.floor(((valor_a_pagar - lance) / parcelas))
}


function verificar_ultima_parcela_em_manter_prazo(valor_a_pagar, lance, novo_prazo, parcela){
    const novo_valor_a_pagar = valor_a_pagar -  lance
    if(novo_prazo * parcela < novo_valor_a_pagar){
        return novo_valor_a_pagar - novo_prazo * parcela
    }
}


main()
