// O indexOf()método retorna o primeiro índice (posição) de um valor especificado.

// O indexOf()método retorna -1 se o valor não for encontrado.

// O indexOf()método inicia em um índice especificado e pesquisa da esquerda para a direita.

// Por padrão, a pesquisa começa no primeiro elemento e termina no último.

// Valores iniciais negativos contam a partir do último elemento (mas ainda pesquisa da esquerda para a direita).


const fruits = ["Banana", "Orange", "Apple","Abacaxi","Tomato","Avocado", "Mango", "Apple"];
let index = fruits.indexOf("Apple");
let index2 = fruits.indexOf("Apple", 3)

console.log(index)
console.log(index2)