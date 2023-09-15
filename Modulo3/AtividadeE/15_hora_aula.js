/**
 * F02_q15:Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
 * Escreva na tela qual dos professores tem salário total maior.
 */

import { question } from "readline-sync";

function main(){
    // Entrada
    console.log('---- PROFESSOR 1 ----')
    const h_aula_professor_1 = Number(question('Qtd. Hora Aula: '))
    const valor_hora_1 = Number(question('Valor por Hora(R$): '))
    console.log('---- PROFESSOR 2 ----')
    const h_aula_professor_2 = Number(question('Qtd. Hora Aula: '))
    const valor_hora_2 = Number(question('Valor por Hora(R$): '))

    // Processamento
    const salario1 = calcular_salario_professor(valor_hora_1, h_aula_professor_1)
    const salario2 = calcular_salario_professor(valor_hora_2, h_aula_professor_2)
    const maior_salario = verificar_salario_maior(salario1, salario2)

    // Saída
    console.log(`\n--- MAIOR SALÁRIO ---`)
    if(maior_salario === salario1){
        console.log(`PROFESSOR 1: ${maior_salario.toFixed(2)}`)
    }else{
        console.log(`PROFESSOR 2: R$ ${maior_salario.toFixed(2)}`)
    }
}

function verificar_salario_maior(salario1, salario2){
    if(salario1 > salario2){
        return salario1
    }return salario2
}

function calcular_salario_professor(valor_hora_aula, qtd_hora){
    return valor_hora_aula * qtd_hora
}

main()
