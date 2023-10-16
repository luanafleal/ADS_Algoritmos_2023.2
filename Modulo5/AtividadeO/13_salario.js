/**
 * F04 - Q13: Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
 * descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2 somas. (Flag: salário=0)
 * De Até Acréscimo
 * R$ 0,00 R$ 2.999,99 25 %
 * R$ 3.000,00 R$ 5.999,99 20 %
 * R$ 6.000,00 R$ 9.999,99 15 %
 * Acima de R$ 10.000,00 10 %
 */

import { get_number_min, print} from '../../utils/input.js'
import { porcentagem } from '../../utils/math.js'


function main() {
    print('Encerrar -> Salario : 0')
    let numero_funcionario = 1

    print(`---- Funcionário ${numero_funcionario} ----`)
    let salario = get_number_min('> Salario: ', 0)
    let soma_salarios_atuais = 0
    let soma_salarios_reajustados = 0
   

    while (salario !== 0) {
        soma_salarios_atuais = soma_salarios_atuais  + salario
        const novo_salario = calcular_novo_salario(salario)
        print(`Novo Salário: R$ ${novo_salario.toFixed(2)}`)
        soma_salarios_reajustados = soma_salarios_reajustados + novo_salario
        numero_funcionario++

        print(`\n---- Funcionário ${numero_funcionario} ----`)
        salario = get_number_min('> Salario: ', 0)
    }

    const diferenca_salarios = soma_salarios_reajustados - soma_salarios_atuais

    print('\n------- RELATÓRIO -------')
    print(`Soma Salários Atuais = R$ ${soma_salarios_atuais.toFixed(2)}`)
    print(`Soma Salários Reajustados = R$ ${soma_salarios_reajustados.toFixed(2)}`)
    print(`Diferença = R$ ${diferenca_salarios.toFixed(2)}`)

}

function calcular_novo_salario(salario) {
    let novo_salario
    if (salario <=  2999.99){
        novo_salario = salario + porcentagem(salario, 25)
    } else if (salario >= 3000 && salario <= 5999.99) {
        novo_salario = salario + porcentagem(salario, 20)
    } else if (salario >= 6000 && salario <= 9999.99) {
        novo_salario = salario + porcentagem(salario, 15)
    } else {
        novo_salario = salario + porcentagem(salario, 10)
    }

    return novo_salario
}


main()
