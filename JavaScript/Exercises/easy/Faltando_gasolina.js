// Você estava acampando com seus amigos longe de casa, mas quando chega a hora de voltar, percebe que seu combustível está acabando e a bomba mais próxima fica a 50 milhas de distância!
// Você sabe que, em média, seu carro roda cerca de 25 milhas por galão. Restam 2 galões.
// Considerando esses fatores, escreva uma função que diga se é possível chegar à bomba ou não. A função deve retornar true se for possível e falso se não for. Os valores de entrada são sempre positivos.


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (fuelLeft * mpg >= distanceToPump)? true : false
//   };

// console.log(zeroFuel(50,25,2))

// =======================
 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump ? "gasolina suficiente": "gasolina insuficiente"
  };
console.log(zeroFuel(50,25,2))