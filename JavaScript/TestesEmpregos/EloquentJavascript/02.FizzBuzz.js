// Escreva um programa que console.log imprima todos os números de 1 a 100, com duas exceções. Para números divisíveis por 3, imprima "Fizz"em vez do número, e para números divisíveis por 5 (e não 3), imprima "Buzz", se o número for divisível pelos dois imprima "FizzBuzz".




for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n); // explique o pq de output ser primeiro
  }