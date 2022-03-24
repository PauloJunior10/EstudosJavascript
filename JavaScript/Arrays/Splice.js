// https://www.w3schools.com/jsref/jsref_slice_array.asp
// Olhar no final da página a sintaxe, os parâmetros e etc.

// Definition and Usage
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

const fruits = ["Banana", "Orange",'Apple','Mango','Avocado' , 'Lemon' ,'Pitomba'];
const myBest = fruits.slice(0, -2 );
const iDoNotLike = fruits.slice(5)

console.log( iDoNotLike)