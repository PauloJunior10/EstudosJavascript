// O splice()método adiciona e/ou remove elementos do array.

// O splice()método substitui a matriz original.

//1) Na posição 2 ele adiciona 2 elementos
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits)

//2)Na posição 2, remova 2 itens:
const frutas = ["Banana", "Orange", "Apple", "Mango"];

frutas.splice(2, 2);

console.log(frutas)