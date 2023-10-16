/**
 *  F04 - Q17: Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
 * algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
 * baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').
 */

import { get_number_min, get_positive_number, get_text, print } from "../../utils/input.js";

function main() {
        print('Encerrar -> Nome da Candidata: 0')
        let nome = get_text('Nome da Candidata: ')

        let nome_mais_alta, nome_mais_baixa, nome_mais_magra, nome_mais_gorda
        let altura_mais_alta = Infinity
        let altura_mais_baixa = -Infinity
        let peso_mais_magra
        let peso_mais_gorda

        while (nome !== 'FIM') {
            const altura = get_positive_number('Altura(m): ')
            const peso = get_positive_number('Peso: ')

            if(altura >= altura_mais_alta) {
                altura_mais_alta = altura
                nome_mais_alta = nome
            }

            
            if(altura <= altura_mais_baixa) {
                altura_mais_baixa = altura
                nome_mais_baixa = nome
            }

            nome = get_text('\nNome da Candidata: ')
        }

        if (nome_mais_alta !== undefined) {
            print(`Candidata mais alta: ${nome_mais_alta} - Altura: ${altura_mais_alta}m`)
            print(`Candidata mais baixa: ${nome_mais_baixa} - Altura: ${altura_mais_baixa}m`)
        }

        
}


main()

//incompleta