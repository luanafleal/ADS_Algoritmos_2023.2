/**
 * F03-Q15
 * Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
 */
import { question } from 'readline-sync'

function main(){
    const numeroDigitado = Number(question('Quant de Termos da Sequencia: '))
    console.log(`${numeroDigitado} primeiros termos de seqüência`)

    let numeroSequencia = 0
    let razaoAtualSequencia = 1

    while (razaoAtualSequencia <= numeroDigitado){
        numeroSequencia = numeroSequencia + razaoAtualSequencia
        console.log(numeroSequencia)
        razaoAtualSequencia++
    }
}

main()