// 9. Force no anterior que Limite Superior seja maior que o limite inferior

import { question } from "readline-sync";

function main(){
    console.log(`----- Intervalo de Números -----`)
    const limite_inferior = Number(question('Limite Inferior: '))
    const limite_superior = obter_limite_superior('Limite Superior: ', limite_inferior)
    const numero_multiplo =  Number(question('Numero: '))

    console.log('Intervalo')
    let numero = limite_inferior
    while (numero <= limite_superior){
        console.log(`> ${numero}`)
        numero++
    }

    console.log(`Múltiplos de ${numero_multiplo}`)
    numero = limite_inferior
    while (numero <= limite_superior){
        if(eh_multiplo_de_numero(numero, numero_multiplo)){
            console.log(`> ${numero}`)
        }

        numero++
    }
}

function eh_multiplo_de_numero(candidato, numero){
    return candidato % numero === 0
}

function obter_limite_superior(label, limite_inferior){
    let limite_superior = Number(question(label))
    while(limite_superior <= limite_inferior){
        console.log(`ERRO > Digite um número maior que ${limite_inferior}`)

        limite_superior = Number(question(label))
    }

    return limite_superior
}

main()