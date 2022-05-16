// O fill()método preenche os elementos especificados em uma matriz com um valor.

// O fill()método substitui a matriz original.

// As posições inicial e final podem ser especificadas. Caso contrário, todos os elementos serão preenchidos.

const fruits = ["Banana", "Orange", "Apple","Abacaxi","Tomato","Avocado", "Mango", "Apple"]; 
// fruits.fill("graviola"); // vai preencher todo o array
//fruits.fill("graviola",3,6) // vai preencher o index 3,4 e 5
fruits.fill('GRAVIOLA',3) // Vai substituir a partir do index 3

console.log(fruits)