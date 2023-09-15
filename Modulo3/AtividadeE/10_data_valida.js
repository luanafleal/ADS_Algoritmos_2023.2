/**
 * F02_q10:Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
 */

import { question } from "readline-sync";

function main(){
    const dia = Number(question('Dia: '))
    const mes = Number(question('Mes: '))
    const ano = Number(question('Ano: '))

    const data_valida = eh_data_valida(dia, mes, ano)

    if(ano < 1){
        console.log('Ano Inválido')
    }else{
        if(data_valida){
            console.log('> Data Válida')
        }else{
            console.log('> Data Inválida')
        }
    }
}


function eh_data_valida(dia, mes, ano){
    if(mes >= 1 && mes <=12){
        if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
                return dia >= 1 && dia <= 31
        }else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
                return dia >= 1 && dia <= 30
        }else if(mes === 2){
            if (eh_ano_bissexto(ano)) {
                return dia >= 1 && dia <= 29;
            } else {
                return dia >= 1 && dia <= 28;
            }
        }
    }
    return false;
}


function eh_ano_bissexto(ano){
    return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)

}


main()
