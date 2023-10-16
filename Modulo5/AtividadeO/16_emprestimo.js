/**
 *  F04 - Q16: Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
 * Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
 * algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.
 */

import { get_number_min, get_positive_number } from "../../utils/input.js";

function main() {
    const emprestimo = get_positive_number('Digite o valor do emprestimo: ')
    const pagamento_diario = get_positive_number('Digite o valor do pagamento diario: ')
    const taxa_juros_diaria = get_number_min('Digite a taxa de juros diaria (em decimal, ex.: 0.0085 para 0.85%): ', 0)

    const dias_necessarios = calcular_dias_uteis_para_pagamento(emprestimo, pagamento_diario, taxa_juros_diaria)
    console.log(`Dias úteis necessários para concluir o pagamento do empréstimo: ${dias_necessarios}`)
}

function calcular_dias_uteis_para_pagamento(emprestimo, pagamento_diario, taxa_diaria) {
    let saldo = emprestimo
    let dias_uteis = 0

    while (saldo > 0) {
        saldo = saldo + (saldo * taxa_diaria)
        saldo -= pagamento_diario
        dias_uteis++

        if (saldo < 0) {
            saldo = 0
        }
    }

    return dias_uteis
}

main()

