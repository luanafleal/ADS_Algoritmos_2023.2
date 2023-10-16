/**
 *  F04 - Q20: Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
 * 600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
 * um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
 * · Distância percorrida desde a última medição;
 * · Quantidade de litros consumidos para percorrer a distância indicada.
 * Escreva um algoritmo que leia estas informações e escreva:
 * · se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
 * · se o carro parou antes de chegar por faltatão contendo o seu n.o de identificação e seu
 * peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
 * boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)
 */

import { get_positive_number, print } from "../../utils/input.js"

function main(){
    const distanciaTotal = 600
    let distanciaPercorrida = 0
    let litrosConsumidos = 0
    let tanqueCombustivel = 50
    let consumoKmPorLitro = 0

    while (distanciaPercorrida < distanciaTotal && litrosConsumidos < tanqueCombustivel) {
        const distanciaMedicao = get_positive_number('Distancia percorrida desde a ultima medicao: ')
        const litrosMedicao = get_positive_number('Qtd litros consumidos desde a última medição: ')
        
        distanciaPercorrida += distanciaMedicao
        litrosConsumidos += litrosMedicao

        consumoKmPorLitro = distanciaPercorrida / litrosConsumidos
    }

    if (distanciaPercorrida >= distanciaTotal) {
        print("O carro chegou ao seu destino!")
    } else if (litrosConsumidos >= tanqueCombustivel) {
        print("O carro parou antes de chegar por falta de combustível.")
    }

    print("Consumo em km/l:", consumoKmPorLitro.toFixed(2));
}

main()