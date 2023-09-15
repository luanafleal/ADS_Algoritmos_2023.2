/**
 * F02_q05: Leia 3 (três) números e escreva-os em ordem crescente.
 */

import { question } from 'readline-sync'

function main(){
    const num1 = Number(question('Primeiro numero: '))
    const num2 = Number(question('Segundo numero: '))
    const num3 = Number(question('Terceiro numero: '))

    const ordem_crescente = ordenar_numeros(num1, num2, num3)

    console.log(`${ordem_crescente}`)
}

function ordenar_numeros(n1, n2, n3){
    if (n1 <= n2 && n1 <= n3) { // n1 é o menor
        if (n2 <= n3) {
            return `${n1}, ${n2}, ${n3}`
        } else {
            return `${n1}, ${n3}, ${n2}`
        }
    } else if (n2 <= n1 && n2 <= n3) { // n2 é o menor
        if (n1 <= n3) {
            return `${n2}, ${n1}, ${n3}`
        } else {
            return `${n2}, ${n3}, ${n1}`
        }
    } else { // n3 é o menor
        if (n1 <= n2) {
            return `${n3}, ${n1}, ${n2}`
        } else {
            return `${n3}, ${n2}, ${n1}`
        }
    }
}

main()
