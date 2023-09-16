/**
 * F02-Q27: Determine a idade de uma pessoa, em anos, meses e
 * dias, dadas a data (dia, mês e ano) do seu
 * nascimento e a data (dia, mês e ano) atual.
**/ 

import { question } from "readline-sync";


function main(){
    console.log('--- Data de Nascimento ---')
    const dt_nascimento = Number(question('Dia: '))
    const mes_nascimento = Number(question('Mes: '))
    const ano_nascimento = Number(question('Ano: '))
    console.log('------- Data Atual -------')
    const dia_atual = Number(question('Dia: '))
    const mes_atual = Number(question('Mes: '))
    const ano_atual = Number(question('Ano: '))

    const idade = calcular_idade_completa(dt_nascimento, dia_atual, mes_nascimento, mes_atual, ano_nascimento, ano_atual)

    console.log(idade)
}


function jah_fez_aniversario(mes_atual, mes_nasc, dia_atual, dia_nasc){
    if(mes_atual === mes_nasc){
        return dia_atual >= dia_nasc
    }
    return mes_atual > mes_nasc
}


function calcular_anos(ano_atual, ano_nasc, aniversariou){
   if(aniversariou){
        return ano_atual - ano_nasc
   }
   return ano_atual - ano_nasc - 1
}


function calcular_meses(mes_atual, mes_nasc, aniversariou){
    if(aniversariou){
        return mes_atual - mes_nasc
    }else if(mes_atual === mes_nasc){
        return 12 - 1
    }else{
        return 12 - mes_nasc + mes_atual
    }
}


function calcular_dias(dia_nasc, dia_atual){
    if(dia_nasc > dia_atual){
        return 30 - dia_nasc + dia_atual
    }
    return dia_atual - dia_nasc
}


function calcular_idade_completa(dia_nasc, dia_atual, mes_nasc, mes_atual, ano_nasc, ano_atual){
    const aniversariou = jah_fez_aniversario(mes_atual, mes_nasc, dia_atual, dia_nasc)
    const anos_vida = calcular_anos(ano_atual, ano_nasc, aniversariou)
    const meses_vida = calcular_meses(mes_atual, mes_nasc, aniversariou)
    const dias_vida = calcular_dias(dia_nasc, dia_atual)

    return `Sua idade é: ${anos_vida} ano(s), ${meses_vida} mes(es) e ${dias_vida} dia(s)`
}


main()