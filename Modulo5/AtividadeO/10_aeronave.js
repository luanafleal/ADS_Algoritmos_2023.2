/**
 * F04 - Q10: Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
 * pode levantar vôo ou não. Considere os seguintes critérios:
 * · O peso de decolagem da aeronave é sempre igual a 500.000 kg
 * . O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos passageiros;
 * · O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
 * · A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
 * · O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
 * · O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
 * bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso estimado de 10kg.
 * O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
 * ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
 * bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
 * de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
 * mensagem indicando a liberação da decolagem ou não.
 */

import { print, get_number_min, get_positive_number } from '../../utils/input.js'

function main() {
    let peso_decolagem = 500000
    let peso_carga = 0
    let peso_passageiros = 0
    let volume_bagagem_total = 0
    let quant_passageiros = 0

    print('--------------------------- CONTAINERS ----------------------------')
    const numero_containers = get_number_min('Numero de containers de carga: ', 0)
    let contador_containers = 1

    while (contador_containers <= numero_containers) {
        const peso_container = get_positive_number(`- Peso do container ${contador_containers} (em kg): `)
        peso_carga = peso_carga + peso_container
        contador_containers++
    }

    print('\n------------------------- DADOS PASSAGEIROS -----------------------')
    let numero_bilhete = get_number_min('> Numero do bilhete do passageiro (0 para encerrar): ', 0)

    while (numero_bilhete !== 0) {

        if (numero_bilhete !== 0) {
            const quant_bagagem = get_positive_number('Quantidade de bagagens do passageiro: ')
            const peso_passageiro = 70
            const peso_bagagem = 10
            
            peso_passageiros = peso_passageiros + peso_passageiro
            volume_bagagem_total = volume_bagagem_total + quant_bagagem * peso_bagagem
            quant_passageiros++
        }

        numero_bilhete = get_number_min('> Numero do bilhete do passageiro (0 para encerrar): ', 0)
    }
    
    // Peso do combustível em litros
    const fator_combustivel = 1.5
    const quant_minima_combustivel = 10000
    const peso_combustivel = quant_minima_combustivel * fator_combustivel;

    const peso_total = peso_carga + peso_passageiros + peso_combustivel;
    const mensagem_decolagem = peso_total <= peso_decolagem ? 'Decolagem liberada.' : 'Aeronave não pode decolar devido ao excesso de peso.'

    print('\n-------------------------------------------------------------------')
    print(`Quantidade de passageiros: ${quant_passageiros}`);
    print(`Quantidade total de volume de bagagem: ${volume_bagagem_total} kg`);
    print(`Peso dos passageiros: ${peso_passageiros} kg`);
    print(`Peso da carga: ${peso_carga} kg`);
    print(`Quantidade possível de combustível: ${quant_minima_combustivel} litros`);
    print(mensagem_decolagem)
}


main()
