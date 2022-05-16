//  O método every() testa se todos os elementos no array passam no teste implementado pela função fornecida. Ele retorna um valor booleano.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true