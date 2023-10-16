/**
 *  F04 - Q19: Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
 * peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
 * boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)
 */

import { question } from "readline-sync"

function main() {
  console.log("--- BOI ---")
  //   Estado anterior
  let id = Number(question("ID: "))
  let peso
  let id_menor
  let id_maior
  let peso_menor = Infinity
  let peso_maior = -Infinity

  // Condição de continuidade
  while (id != 0) {
    // Trabalho
    peso = Number(question("Peso (@): "))

    if (peso <= peso_menor) {
      peso_menor = peso
      id_menor = id
    }

    if (peso >= peso_maior) {
      peso_maior = peso
      id_maior = id
    }

    // Convergencia de Dados
    id = Number(question("ID: "))
  }

  //   Saída
  if (id_menor !== undefined) {
    console.log(`Boi de Menor Peso: ID=${id_menor} - (${peso_menor})@`)
    console.log(`Boi de Maior Peso: ID=${id_maior} - (${peso_maior})@`)
  }
}

main()