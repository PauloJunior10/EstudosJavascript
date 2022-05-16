
// O método some() testa se pelo menos um elemento na matriz passa no teste implementado pela função fornecida. Retorna true se, no array, encontrar um elemento para o qual a função fornecida retorna true; caso contrário, retorna falso. Ele não modifica a matriz.

// O some()método executa a função uma vez para cada elemento do array:

// Se a função retornar true , some()retornará true e parará.
// Se a função retornar false , some()retornará false e parará.
// O some()método não executa a função para elementos de array vazios.

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

// ===================================

function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
  console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
  console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true
