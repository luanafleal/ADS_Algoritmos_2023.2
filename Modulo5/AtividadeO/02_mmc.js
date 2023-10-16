/**
 * F04 - Q02. Leia 2 (dois) números, calcule e escreva 
 * o mmc (mínimo múltiplo comum) entre os números lidos.
*/


import { get_positive_number, print, print_inline } from '../../utils/input.js'


function main(){
  const num1 = get_positive_number('Número 1: ')
  const num2 = get_positive_number('Número 2: ')
  let maior, menor
  if (num1 > num2){
    maior = num1
    menor = num2
  }else{
    maior = num2
    menor = num1
  }

  let mmc = maior

  while (mmc % menor !== 0){
    mmc = mmc + maior
  }

  print(`\nO MMC(${num1}, ${num2}) é ${mmc}`)
}

main()
