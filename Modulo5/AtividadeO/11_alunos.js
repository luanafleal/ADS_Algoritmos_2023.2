/**
 * F04 - Q11: Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
 * matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
 * Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)/10
 * Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
 * aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
 * de alunos da turma.
 */

import { get_number_min, get_number_min_max, print} from '../../utils/input.js'

function main() {
    let matrícula = get_number_min('> Matricula: ', 0)
    let quant_reprovados = 0
    let quant_aprovados  = 0
    let total_alunos = 0

    while (matrícula !== 0) {
        const nota_1 = get_number_min_max('Nota 1: ', 0, 10)
        const nota_2 = get_number_min_max('Nota 2: ', 0, 10)
        const nota_3 = get_number_min_max('Nota 3: ', 0, 10)

        const media = calcular_media(nota_1, nota_2, nota_3)

        if (media >= 7) {
            print('\n- ALUNO APROVADO')
            quant_aprovados++
        } else {
            print('\n- ALUNO REPROVADO')
            quant_reprovados++
        }

        total_alunos++
        print('-------------------')

        matrícula = get_number_min('> Matricula: ', 0)
    }

    print('----- TURMA -------')
    print(`> Quant. Alunos: ${total_alunos}`)
    print(`> Alunos Aprovados: ${quant_aprovados}`)
    print(`> Alunos Reprovados: ${quant_reprovados}`)


}

function calcular_media(nota_1, nota_2, nota_3) {
    return ((2 * nota_1) + (3 * nota_2) + (5 * nota_3)) / 10 
}

main()
