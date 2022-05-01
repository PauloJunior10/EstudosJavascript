// Uma função recursiva é uma função que chama a si mesma até encontrar uma instrução de parar. Essa técnica é chamada de recursão.

// ----------------------------

//  fatorial de (5)
// !5 = 5*4*3*2*1 = 120
// o fatorial de 1 e 0 é "1"

function fatorial(n){
    if(n == 1 || n == 0){ // aqui é a condição de parada
        return 1;
    }
   return n * fatorial (n - 1)
}
console.log(fatorial(0))

// b) crie um time usando RECURSIVIDADE
// const timer = (n1) => {
//     console.log (n1)
//     if(n1 > 0){
//         timer(n1-1)
//     }
// }

// timer(10)