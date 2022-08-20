//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

//1)a partir do índice 2, remove 0 elementos e insere "lemon" e "kiwi"
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits)

//2)Na posição 2, remova 2 itens:
const frutas = ["Banana", "Orange", "Apple", "Mango"];

frutas.splice(2, 2);

console.log(frutas)