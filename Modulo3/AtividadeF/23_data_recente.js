/**
 * F02-Q23: Leia 2 datas (cada data é composta por 3 variáveis inteiras:
 * dia, mês e ano) e escreva qual delas é a mais recente.
**/

import { question } from "readline-sync";


function main(){
    console.log('---------- Primeira Data ----------')
    const dia_1 = Number(question('Dia: '))
    const mes_1 = Number(question('Mes: '))
    const ano_1 = Number(question('Ano: '))
    console.log('----------- Segunda Data -----------')
    const dia_2 = Number(question('Dia: '))
    const mes_2 = Number(question('Mes: '))
    const ano_2 = Number(question('Ano: '))

    const data_recente = obter_data_recente(dia_1, mes_1, ano_1, dia_2, mes_2, ano_2)

    console.log('--------- Data Recente ---------')
    console.log(data_recente)
}


function obter_data_recente(dia_1, mes_1, ano_1, dia_2, mes_2, ano_2){
    const data1 = `${dia_1}/${mes_1}/${ano_1}`
    const data2 = `${dia_2}/${mes_2}/${ano_2}`

    if(ano_1 > ano_2){
        return data1
    }else if(ano_1 === ano_2){
        if(mes_1 > mes_2){
            return data1
        }else if(mes_1 === mes_2){
            if(dia_1 > dia_2){
                return data1
            }else{
                return data2
            }
        }
    }else{
        return data2
    }
}


main()
