/**
 * F02_q16: Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
 * ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
 * final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
 * escreva “Reprovado”.
 */

import { question } from "readline-sync";


function main(){
    const nota1 = Number(question('Primeira Nota: '))
    const nota2 = Number(question('Segunda Nota: '))

    const media = calcular_media(nota1, nota2)

    console.log(`MÉDIA: ${media} ----------------`)
    if(media >= 7){
        console.log('> SITUAÇÃO: APROVADO')
    }else if(media < 7){
        const nota_prova_final = Number(question('Nota do Exame Final: '))
        const media_final = calcular_media(media, nota_prova_final)

        if(media_final >= 5){
            console.log(`> MÉDIA: ${media_final}`)
            console.log('SITUAÇÃO: APROVADO')
        }else{
            console.log(`> MÉDIA: ${media_final}`)
            console.log('> SITUAÇÃO: REPROVADO')
        }
    }
}


function calcular_media(nota1, nota2){
    return (nota1 + nota2) / 2
}


main()
