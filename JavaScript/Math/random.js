// O método Math.random() retorna um número aleatório de 0 (inclusive) até, mas não incluindo, 1 (exclusivo).

let a = Math.random()

// imprime um número de zero até 10
let x = Math.floor((Math.random() * 10) + 1)
// let x = Math.floor((Math.random() * 11)) ou poderíamos arredondar um número pra cima


// imprime um número de zero até 100
let y = Math.floor((Math.random() * 100) + 1);
// let y = Math.floor((Math.random() * 101)); ou poderíamos arredondar um número pra cima 
console.log(a, x , y)