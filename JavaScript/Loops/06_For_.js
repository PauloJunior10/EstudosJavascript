
// Iterar com laços for em JavaScript
//Laços for são declarados com três expressões opcionais separadas por ponto e vírgula:

// for (a; b; c), onde a é a declaração de inicialização, b é a declaração de condição, e c é a expressão final.

// a) Contagem regressiva
// function regressiva(n) {
//   const newArray = []

//   for (i = n; i > 0; i--) {
//     newArray.push(i)
//   }
//   return newArray
// }
// console.log(regressiva(5))

// b)   Iterar números ímpares com um laço for
// const ourArray = [];

// for (let i = 1; i < 20; i += 2) {
//   ourArray.push(i)
// }
// console.log(ourArray)

// c)     Iterar através de um array com laço for
// const arr = ['abacate', 'cenoura', 'leite', 'pera'];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// d) Aninhar laços for
// const arr = [
//    [1, 2], [3, 4], [5, 6]
//  ];

//  for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr[i].length; j++) {
//      console.log(arr[i][j]);
//    }
//  }

// e) buscar o maior número da array
// const array = [13,24,233,43,57,89,76,767,2455]

// let maior = 0;
// for (let i = 0; i < array.length; i++) {
//    if ( array[i] > maior ) {
//     maior = array[i];
//    }
// }
// console.log(maior)

//f) Aninhar laços, depois imprimir o maior número
const arr = [
   [3, 2], [5, 9], [4, 1]
];

let maior = 0
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
      const newArray = arr[i][j]
      if (newArray > maior) {
         maior = newArray
      }
   }
}
console.log(maior)