//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/in

const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// expected output: true

console.log('Honda' in car);
// expected output: false , pois não é a propriedade

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// expected output: "Suzuki"