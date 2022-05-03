// Escreva um Timer usando operador ternário e função recursiva

function countdown(n){
    return n > 0 ? [n, ...countdown(n - 1)] : ["seu tempo acabou"];
 }

 console.log(countdown(10))


//  b) Usando "concat" estudar mais esse método.
//  function countdown(n){
//     return n < 1 ? [] : [n].concat(countdown(n - 1));
//  }

// c) Usando "Splice"
// function countdown(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const arr = countdown(n - 1);
//       arr.splice(0, 0, n);
//       return arr;
//     }
//   }