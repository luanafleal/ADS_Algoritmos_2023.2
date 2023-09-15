/**
 * F02_q08:Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
 * sua idade exata (em anos).
 */

import { question } from "readline-sync";


function main(){
    // Entrada
    console.log('------ DATA ATUAL ------')
    const dia_atual = Number(question('Dia: '))
    const mes_atual = Number(question('Mês: '))
    const ano_atual = Number(question('Ano: '))
    console.log('---- DATA NASCIMENTO ----')
    const dia_nascimento = Number(question('Dia: '))
    const mes_nascimento = Number(question('Mês: '))
    const ano_nascimento = Number(question('Ano: '))
    console.log('-------------------------')

    // Processamento
    const qtd_anos = calcular_anos(ano_atual, ano_nascimento)
    const idade_exata = calcular_idade_exata(mes_atual, mes_nascimento, dia_atual, dia_nascimento, qtd_anos)

    // Saída
    console.log(`Idade: ${idade_exata} anos`)
}


function calcular_idade_exata(mes_atual, mes_nascimento, dia_atual, dia_nascimento, qtd_anos){
    if(mes_nascimento > mes_atual){
        return qtd_anos - 1
    }else if(mes_nascimento === mes_atual){
        if(dia_nascimento <= dia_atual){
            return qtd_anos
        }else{
            return qtd_anos - 1
        }
    }else{
        return qtd_anos
    }
}


function calcular_anos(ano_atual, ano_inicio){
    return ano_atual - ano_inicio
}


main()
