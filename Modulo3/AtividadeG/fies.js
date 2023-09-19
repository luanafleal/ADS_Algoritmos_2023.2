import { question } from 'readline-sync'

function main(){
    console.log('--------------- SIMULADOR FIES ------------------')
    const duracao_curso = Number(question('Duracao do Curso: '))
    const mensalidade = Number(question('Mensalidade(R$): '))
    const taxa_selic = Number(question('Taxa Selic(%): '))
    const salario_minimo = Number(question('Salario Minimo Vigente(R$): '))
    const renda = Number(question('Renda Familiar(R$): '))
    const qtd_pessoas = Number(question('Quant. de Pessoas na Familia: '))
    const ano_inicio = Number(question('Ano de Inicio: '))
    const semestre_inicio = Number(question('Semestre de Inicio: '))

    const renda_per_capita = calcular_renda_per_capita(renda, qtd_pessoas)
    const habilitado = obter_situacao_aprovacao(renda_per_capita, salario_minimo)
    
    if(!habilitado){ 

        console.log('------------ Financiamento FIES ---------------')
        console.log('> Não Passou no Fies!')
        console.log('-----------------------------------------------')

    }else{

        const valor_curso = calcular_valor_curso(duracao_curso, mensalidade)
        const taxa_juros = obter_taxa_juros(renda_per_capita, salario_minimo, taxa_selic)
        const juros_totais = calcular_juros(valor_curso, taxa_juros, duracao_curso)
        const valor_total = valor_curso + juros_totais
        const valor_pago_curso_mais_carencia = calcular_valores_pago(duracao_curso)
        const valor_restante_apagar = valor_total - valor_pago_curso_mais_carencia
        const qtd_parcelas = calcular_quant_parcelas(duracao_curso)
        const valor_parcelas = calcular_parcelas(valor_restante_apagar, qtd_parcelas)
        const renda_minima = calcular_renda_minima(valor_parcelas)
        const fim_carencia = obter_fim_carencia(semestre_inicio, ano_inicio, duracao_curso)
        const ano_inicio_pagamento = obter_ano_inicio_pagamento(fim_carencia)
        const inicio_pagamento = formatar_ano(ano_inicio_pagamento)
        const ano_fim_pagamento = obter_ano_fim_pagamento(qtd_parcelas, fim_carencia)
        const fim_pagamento = formatar_ano(ano_fim_pagamento)

        console.log('------------ Financiamento FIES ---------------')
        console.log('> Parabéns, aprovado no Fies!')
        console.log('Valor a Ser Financiado: R$', valor_curso.toFixed(2))
        console.log('Valor Total dos Juros: R$', juros_totais.toFixed(2))
        console.log('Valor Total a Pagar: R$', valor_total.toFixed(2))
        console.log('Valor a pagar (Curso + Carência): R$', valor_pago_curso_mais_carencia.toFixed(2))
        console.log(`Parcelas do Financiamento: ${qtd_parcelas} X de R$ ${valor_parcelas.toFixed(2)}`)
        console.log('Renda Mínima Para Iniciar Pagamento: R$', renda_minima.toFixed(2))
        console.log('Início do Pagamento:', inicio_pagamento)
        console.log('Fim do Pagamento:', fim_pagamento)
        console.log('-----------------------------------------------')

    }
}


function calcular_renda_per_capita(salario, qtd_pessoas){
    return salario/qtd_pessoas
}


function obter_situacao_aprovacao(renda_per_capita, salario_minimo){
    return renda_per_capita <= salario_minimo * 3
}


function calcular_valor_curso(anos, mensalidade){
    return anos * 12 * mensalidade
}


function obter_taxa_juros(renda_per_capita, salario_minimo, taxa_selic){
    if(renda_per_capita <= salario_minimo * 1.5){
        return 0.1 * (taxa_selic / 100)
    }else if(renda_per_capita > salario_minimo * 1.5 && renda_per_capita <= salario_minimo * 2){
        return 0.15 * (taxa_selic / 100)
    }else if(renda_per_capita > salario_minimo * 2 && renda_per_capita <= salario_minimo * 2.5){
        return 0.2 * (taxa_selic / 100)
    }else{
        return 0.25 * (taxa_selic / 100)
    }
}


function calcular_juros(valor, taxa, tempo){
    return valor * taxa * tempo
}


function converter_anos_para_meses(anos){
    return anos * 12   
}


function calcular_valores_pago(anos){
    const meses = converter_anos_para_meses(anos) + 18
    return (meses / 3) * 150
}


function calcular_quant_parcelas(anos){
    return converter_anos_para_meses(anos) * 4
}


function calcular_parcelas(valor, prazo){
    return valor / prazo
}


function calcular_renda_minima(valor){
    return valor * 10
}


function obter_fim_carencia(semestre_inicio, ano_inicio, duracao_curso){
    const carencia = 18
    const meses_semestre = semestre_inicio === 1 ? 0 : 6
    return (converter_anos_para_meses(duracao_curso) + carencia + meses_semestre) / 12 + ano_inicio
}


function obter_ano_inicio_pagamento(fim_carencia){
    return (converter_anos_para_meses(fim_carencia) + 1) / 12
}


function formatar_ano(ano){
    const ano_inteiro = Math.floor(ano)
    if(ano * 10 % 10 <= 5){
        return `${ano_inteiro}.1`
    }else{
        return `${ano_inteiro}.2`
    }
}


function obter_ano_fim_pagamento(qtd_parcelas, fim_carencia){
    return qtd_parcelas / 12 + fim_carencia
}


main()
