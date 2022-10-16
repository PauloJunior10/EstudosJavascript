// O indexOf()método retorna o primeiro índice (posição) de um valor especificado.

// O indexOf()método retorna -1 se o valor não for encontrado.

// O indexOf()método inicia em um índice especificado e pesquisa da esquerda para a direita.

// Por padrão, a pesquisa começa no primeiro elemento e termina no último.

// Valores iniciais negativos contam a partir do último elemento (mas ainda pesquisa da esquerda para a direita).

const fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Abacaxi",
  "Tomato",
  "Avocado",
  "Mango",
  "Apple",
];
let index = fruits.indexOf("Apple");
let index2 = fruits.indexOf("Apple", 3);

console.log(index);
console.log(index2);

// ==========================

let nome = "Paulo Luiz Silva";
if (nome.indexOf('junior') > -1) {
    console.log('Sobrenome encontrado')
}else{
    console.log("sobrenome não encontrado")
}


// Inserir elemento em array se ele não existir com JavaScript

const arr = [1, 2, 3]
const x = 4

if(arr.indexOf(x) === -1) {
    arr.push(x)
}

console.log(arr) // [1, 2, 3, 4]