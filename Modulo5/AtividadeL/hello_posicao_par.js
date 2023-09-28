//3. Faça o mesmo do anterior e bote um * junto das posições pares

function main() {
    let contador = 1

    while(contador <= 10) {
        if (eh_posicao_par(contador)){
            console.log(`${contador}º  - Hello *`)
        }else{
            console.log(`${contador}º  - Hello`)
        }
        contador++
    }
}

function eh_posicao_par(contador){
    return contador % 2 === 0
}

main()
