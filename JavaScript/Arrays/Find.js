// O método find() retorna o PRIMEIRO elemento na matriz fornecida que satisfaz a função de teste fornecida. Se nenhum valor satisfizer a função de teste, undefined será retornado.

// O find()método não executa a função para elementos vazios.

// O find()método não altera a matriz original.

const family = ['joão', 'ana','miguel,','paulo','maria','paulo']
const cousinPaulo = family.find(obj => obj == 'paulo')

console.log(cousinPaulo)

//------------

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(obj => obj > 10);

console.log(found);