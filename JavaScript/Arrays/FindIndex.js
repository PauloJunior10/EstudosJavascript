
// O findIndex()método retorna o índice (posição) do primeiro elemento que passa em um teste.

// O findIndex()método retorna -1 se nenhuma correspondência for encontrada.

// O findIndex()método não executa a função para elementos de array vazios.

// O findIndex()método não altera a matriz original.

const family = ['joão', 'ana','miguel,','paulo','maria','paulo']
const cousinPaulo = family.findIndex(obj => obj == 'paulo')

console.log(cousinPaulo)

//------------

const array1 = [5, 12, 8, 130, 44];

const found = array1.findIndex(element => element > 10);

console.log(found);