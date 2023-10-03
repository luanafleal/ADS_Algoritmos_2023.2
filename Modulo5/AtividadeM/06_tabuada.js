/**
 * F_Q6: Escreva a tabuada dos números de 1 a 10.
 */

function main(){
    let numero = 1

    while (numero <= 10){
        montarTabuada(numero)
        numero = numero + 1
    }
}

function montarTabuada(numero){
    let atual = 1
    let produto = 1
    console.log(`\nTabuada do ${numero}`)
    
while (atual <= 10){
        produto = numero * atual
        console.log(`${numero} x ${atual} = ${produto}`)
        atual = atual + 1
    }
}

main()
