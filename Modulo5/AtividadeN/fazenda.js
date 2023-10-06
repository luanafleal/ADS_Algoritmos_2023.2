import { get_number, get_positive_number, get_text, print } from "../../utils/input.js"

function main() {
  print("--- BOI ---")
  let id = get_number("ID: ")
  
  let peso
  let id_menor
  let id_maior
  let peso_menor = 0
  let peso_maior = 0

  while (id != 0) {
    peso = get_positive_number("Peso(@): ")

    if (peso <= peso_menor) {
      peso_menor = peso
      id_menor = id
    }

    if (peso >= peso_maior) {
      peso_maior = peso
      id_maior = id
    }

    id = get_number("ID: ")
  }

  if (id_menor !== undefined) {
    print(`Boi de Menor Peso: ID=${id_menor} - (${peso_menor})@`)
    print(`Boi de Maior Peso: ID=${id_maior} - (${peso_maior})@`)
  }
}

main()