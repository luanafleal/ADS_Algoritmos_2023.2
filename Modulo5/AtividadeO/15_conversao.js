/**
 * F04 - Q15: Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
 * e na base hexadecimal.
 */


import { get_number_min_max, print } from "../../utils/input.js";

function main() {
    let numero_decimal

    while (true) {
        numero_decimal = get_number_min_max('Digite um número decimal entre 0 e 255: ', 0, 255)
        if (!isNaN(numero_decimal) && numero_decimal >= 0 && numero_decimal <= 255) {
            break;
        }
    }

    while (true) {
        numero_decimal = get_number_min_max('Digite um número decimal entre 0 e 255: ', 0, 255)
        if (!isNaN(numero_decimal) && numero_decimal >= 0 && numero_decimal <= 255) {
            break;
        }
    }

    const numero_binario = decimal_para_binario(numero_decimal)
    const numero_hexadecimal = decimal_para_hexadecimal(numero_decimal)

    print(`Número decimal: ${numero_decimal}`)
    print(`Número binário: ${numero_binario}`)
    print(`Número hexadecimal: ${numero_hexadecimal}`)
}

function decimal_para_hexadecimal(numero_decimal) {
    const digitos_hexadecimais = '0123456789ABCDEF'
    let numero_hexadecimal = ''
    let quociente = numero_decimal

    while (quociente > 0) {
        const resto = quociente % 16
        numero_hexadecimal = digitos_hexadecimais[resto] + numero_hexadecimal
        quociente = Math.floor(quociente / 16)
    }

    return numero_hexadecimal
}

function decimal_para_binario(numero_decimal) {
    let numero_binario = ''
    let quociente = numero_decimal
    let expoente_binario = 1

    while (expoente_binario <= 128) {
        const valor_bit = Math.floor(quociente / expoente_binario)
        numero_binario = (valor_bit % 2) + numero_binario
        expoente_binario *= 2
    }

    return numero_binario
}


main()