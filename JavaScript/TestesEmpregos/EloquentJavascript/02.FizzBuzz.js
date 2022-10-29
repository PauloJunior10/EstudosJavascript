// Escreva um programa que console.log imprima todos os números de 1 a 100, com duas exceções. Para números divisíveis por 3, imprima "Fizz"em vez do número, e para números divisíveis por 5 (e não 3), imprima "Buzz".

// Quando você tiver isso funcionando, modifique seu programa para imprimir "FizzBuzz"números que são divisíveis por 3 e 5 (e ainda imprimir "Fizz"ou "Buzz"para números divisíveis por apenas um deles).

function fizzBuzz(){
    for(let index = 0; index <= 100; index++){
        index % 3 === 0 ? console.log("Fizz") ? index % 5 === 0 : console.log('Buzz') : console.log(index)
    }
}

fizzBuzz()


// Solução do livro
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n); // explique o pq de output ser primeiro
  }