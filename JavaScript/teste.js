// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

// Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra

function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
    let valor = 0
    quantidade <= 12 ? valor = 1.30 : valor = 1

    return quantidade*valor
  }

  console.log(calculaPrecoTotal(5))