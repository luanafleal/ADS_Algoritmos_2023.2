/**
 * F02-Q25: Verifique a validade de uma senha fornecida pelo usuário.
 * A senha é 1234. O algoritmo deve escrever
 * uma mensagem de permissão de acesso ou não.
**/

import { question } from "readline-sync";


function main(){
    const senha = Number(question('Digite a senha: '))

    if(validar_senha(senha)){
        console.log('Acesso Permitido')
    }else{
        console.log('Acesso Negado')
    }
}


function validar_senha(senha) {
   return senha === 1234
}


main()