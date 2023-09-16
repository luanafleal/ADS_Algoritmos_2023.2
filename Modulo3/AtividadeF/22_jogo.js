/**
 * F02-Q22: Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por
 * 2 variáveis inteiras: hora e minuto). Calcule e escreva a duração do jogo (horas e minutos),
 * sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em
 * um dia e terminar no dia seguinte.
**/

import { question } from "readline-sync";


function main(){
    console.log('---------- Ìnicio do Jogo ----------')
    const hora_inicio = Number(question('Hora de inicio: '))
    const minuto_inicio = Number(question('Minutos: '))
    console.log('----------- Fim do Jogo -----------')
    const hora_fim = Number(question('Hora do fim: '))
    const minuto_fim = Number(question('Minutos: '))

    const duracao = obter_duracao_jogo(hora_inicio, minuto_inicio, hora_fim, minuto_fim)

    console.log('--------- Duração do Jogo ---------')
    console.log(duracao)
}


function obter_total_horas(horas, minutos) {
    return horas + minutos / 60
}


function obter_minutos(horas) {
    const minutos = horas - Math.floor(horas)
    return (minutos * 60).toFixed()
}


function obter_duracao_jogo(h_inicio, min_inicio, h_fim, min_fim) {
    const total_horas_inicio = obter_total_horas(h_inicio, min_inicio)
    const total_horas_fim = obter_total_horas(h_fim, min_fim)

    let duracao_horas
    if(total_horas_inicio > total_horas_fim){
        duracao_horas = 24 - total_horas_inicio + total_horas_fim
    }else if(total_horas_inicio === total_horas_fim){
        duracao_horas = 24
    }else{
        duracao_horas = total_horas_fim - total_horas_inicio
    }

    const horas_totais = Math.floor(duracao_horas)
    const min_totais = obter_minutos(duracao_horas)

    return `${horas_totais} horas e ${min_totais} minutos`
}


main()
