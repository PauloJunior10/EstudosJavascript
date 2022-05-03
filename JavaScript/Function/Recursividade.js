// Uma função recursiva é uma função que chama a si mesma até encontrar uma instrução de parar. Essa técnica é chamada de recursão.

// toda função recursiva precisa dos seguintes elementos pra funcionar:
// parâmetro acumulador (opcional)
// Condição de saída no início
// lógica própria (opcional)
// Chamada recursiva ao final

// ----------------------------

//  fatorial de (5)
// !5 = 5*4*3*2*1 = 120
// o fatorial de 1 e 0 é "1"

// function fatorial(n){
//     if(n == 1 || n == 0){ // aqui é a condição de parada
//         return 1;
//     }
//     //  enquanto a condição acima for false, ele irá retornar o comando abaixo
//    return n * fatorial (n - 1)
// }
// console.log(fatorial(5))

// b) crie um time usando RECURSIVIDADE

const timer = (n1) => {
    console.log (n1)
    if(n1 == 1){
        console.log("seu tempo acabou")
    }else{ // aqui é a condição de parada
        timer(n1-1)
    }
}

timer(10)