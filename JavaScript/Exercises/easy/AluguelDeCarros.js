// Se o aluguel do carro for maior que 7 dias o desconto é de 50 reais sobre o valor total e se for maior que 3 dias o desconto é de 20 reais sobre o valor total.

function rentalCarCost(d) {
    // Your solution here
    var total=40*d
    if(d>=7){
      total-=50;
    }else if(d>=3){
      total-=20;
    }
    return total;
  }
  console.log( rentalCarCost(7))