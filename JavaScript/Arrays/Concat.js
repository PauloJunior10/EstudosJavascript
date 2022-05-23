// https://www.w3schools.com/jsref/jsref_concat_array.asp
// Definition and Usage
// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays.

const ford = ['Ka','Fusion']
const fiat = ['Palio','Toro']
const chevrolet = ['Celta','Onix']

const cars = ford.concat(fiat,chevrolet)

console.log(cars)
console.log(ford.concat(fiat))