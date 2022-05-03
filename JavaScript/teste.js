// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Faça um programa que leia o número de maçãs compradas, calcule e imprima o custo total da compra.

function valorTotal(quantidade){
    let maca = 1.3 
    if(quantidade > 11){
        maca = 1
    }
    return quantidade * maca
}

console.log(valorTotal(12))