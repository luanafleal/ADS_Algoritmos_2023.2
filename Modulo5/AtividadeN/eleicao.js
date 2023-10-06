/**
 * Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
 * Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
 * · 1, 2, 3 = voto para os respectivos candidatos;
 * · 9 = voto nulo;
 * · 0 = voto em branco;
 * Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
 * a) total de votos para cada candidato;
 * b) total de votos nulos;
 * c) total de votos em branco;
 * d) quem venceu a eleição.
 */

import { get_number, get_positive_number, print } from "../../utils/input.js"

function main(){
    let candidato_1 = 0
    let candidato_2 = 0
    let candidato_3 = 0
    let brancos = 0
    let nulos = 0

    print("-------- ELEIÇÕES -------")
    let qtd_eleitores = get_positive_number('Quantidade de Eleitores: ')

    while(qtd_eleitores > 0){
        const voto = get_number(urna())

        if (voto === 1){
            candidato_1++
        }else if (voto === 2){
            candidato_2++
        }else if (voto === 3){
            candidato_3++
        }else if (voto === 9){
            nulos++
        }else if (voto === 0){
            brancos++
        }else{
            print('Voto Inválido!')
            qtd_eleitores++
        }
      
          qtd_eleitores--
    }

    mostrar_votacao(candidato_1, candidato_2, candidato_3, brancos, nulos)

    const vencedor = computar_vencedor(candidato_1, candidato_2, candidato_3)
    if (vencedor === -1){
        print(`EMPATE! Temos que fazer um nova eleição!`)
    }else{
        print(`O Candidato eleito foi: ${vencedor}`)
    }

}

function urna(){
  const tela = `
  |-------- URNA ----------|
   1 - Candidato 01
   2 - Candidato 02
   3 - Candidato 03
   9 - Nulo
   0 - Branco
  |------------------------|

  VOTO >>> `

  return tela
}

function computar_vencedor(candidato_1, candidato_2, candidato_3){
  if (candidato_1 > candidato_2 && candidato_1 > candidato_3){
    return 1
  }else if (candidato_2 > candidato_1 && candidato_2 > candidato_3){
    return 2
  }else if (candidato_3 > candidato_1 && candidato_3 > candidato_2){
    return 3
  }else{
    return -1;
  }
}

function mostrar_votacao(votos_cand_1, votos_cand_2, votos_cand_3, brancos, nulos){
  print(`
  |------ RESULTADO ------|
  > Candidato 1: ${votos_cand_1}
  > Candidato 2: ${votos_cand_2}
  > Candidato 3: ${votos_cand_3}
  ------
  > Brancos    : ${brancos}
  > Nulos      : ${nulos}
  \n`)
}

main()
