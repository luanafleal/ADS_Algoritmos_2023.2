/**
 * F04 - Q31:Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
 * numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
 * de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).
 */

import { get_number_min_max, print } from "../../utils/input.js"


function main() {
    const numero_decimal = get_number_min_max('Digite um número decimal (1-999): ', 1, 999)  
  
    const numero_romano = converter_para_romano(numero_decimal)
    print(`O número decimal ${numero_decimal} em numeração romana é ${numero_romano}`)
}
  
function decimal_para_romano(digito, unidade, cinco, dez) {
    if (digito === 0) {
      return ""
    } else if (digito === 1) {
      return unidade;
    } else if (digito === 2) {
      return unidade + unidade
    } else if (digito === 3) {
      return unidade + unidade + unidade
    } else if (digito === 4) {
      return unidade + cinco
    } else if (digito === 5) {
      return cinco;
    } else if (digito === 6) {
      return cinco + unidade;
    } else if (digito === 7) {
      return cinco + unidade + unidade
    } else if (digito === 8) {
      return cinco + unidade + unidade + unidade
    } else {
      return unidade + dez
    }
  }
  
  function converter_para_romano(numero_decimal) {
    if (numero_decimal < 1 || numero_decimal > 999) {
      return 'Fora do intervalo permitido (1-999).'
    }
  
    const centenas = Math.floor(numero_decimal / 100)
    const dezenas = Math.floor((numero_decimal % 100) / 10)
    const unidades = numero_decimal % 10
  
    const romano_centenas = decimal_para_romano(centenas, 'C', 'D', 'M')
    const romano_dezenas = decimal_para_romano(dezenas, 'X', 'L', 'C')
    const romano_unidades = decimal_para_romano(unidades, 'I', 'V', 'X')
  
    return romano_centenas + romano_dezenas + romano_unidades
  }
  

main()
  