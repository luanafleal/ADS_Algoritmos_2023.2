import { question } from 'readline-sync'

export function print(texto){
    console.log(texto)
}

export function print_inline(texto){
    process.stdout.write(texto)
}

export function get_text(label){
    return question(label)
}

export function get_number(label){
    let numero = get_text(label)

    while(isNaN(Number(numero)) || numero === ''){
        print('   ERRO: Valor Inválido!')

        numero = get_text(label)
    }

    return Number(numero)
}

export function get_number_min(label, minimo){
    let numero = get_number(label)

    while(numero < minimo){
        print(`> ERRO: Digite um número maior ou igual a ${minimo}`)

        numero = get_number(label)
    }
    
    return numero
}