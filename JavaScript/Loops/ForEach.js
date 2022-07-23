// O .forEach() irá jogar cada um dos elementos do Array no primeiro parâmetro, o índice do elemento no segundo e o Array original no terceiro. Claro que SE NÃO FOR USAR, pode colocar apenas o primeiro :

// O forEach()método chama uma função para cada elemento em uma matriz.

// O forEach()método não é executado para elementos vazios.

// 1 - calcule a soma dos elementos da array

// let sum = 0;
// const numbers = [65, 44, 12, 4];

// numbers.forEach((item) => {
//         return(
//             sum += item
//         )
//     }
// )

// console.log(sum)

// ======== outra forma, fazenda a mesma coisa

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction); // aqui fez a funcao separada e adiconou ela como parametro

// function myFunction(item) {
//   sum += item;
// }

// console.log(sum)

// 2 - multiplique cada elemento da array por 2

// const numbers = [65, 44, 12, 4];

// numbers.forEach(
//     function(item){
//         return(
//             console.log(item * 2)
//         )

//     }
// )
