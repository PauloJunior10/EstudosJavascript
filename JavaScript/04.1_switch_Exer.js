//crie um switch que recebe uma varável com um dia da semana, cada dia tem uma tarefa diferente, sábado e domingo é descanso e se não for nenhum dia, ele imprime " você não digitou nenhum dia válido"

let dia = 'DOMINGO'
//dia = dia.toUpperCase()

switch (dia) {
    case 'SEGUNDA':
        console.log('dia de estudar')
        break;
    case 'TERÇA':
        console.log('dia de malhar')
        break
    case 'QUARTA':
        console.log('dia de trabalhar')
        break
    case 'QUINTA':
        console.log('dia de reunião')
        break
    case 'SEXTA':
        console.log('dia de viajar')
        break
    case 'SABADO':
    case 'DOMINGO':
        console.log('Dia de Descanso')
        break
    default:
        console.log('você não digitou nenhum dia válido')
}

