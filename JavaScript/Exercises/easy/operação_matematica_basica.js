// Sua tarefa é criar uma função que faça quatro operações matemáticas básicas.

// A função deve ter três argumentos - operação(string/char), valor1(número), valor2(número).
// A função deve retornar resultado de números após aplicar a operação escolhida.

// Exemplos(Operador, valor1, valor2) --> saída
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2)
// {
//   switch(operation){
//     case '+': return value1 + value2;
//     case '*': return value1 * value2;
//     case '-': return value1 - value2;
//     case '/': return value1 / value2;
//   }
// }

// console.log(basicOp("+", 10,4))

// ========================================

// function basicOp(o, v1, v2) {
//   if (o === "+") return v1 + v2;
//   if (o === "-") return v1 - v2;
//   if (o === "/") return v1 / v2;
//   if (o === "*") return v1 * v2;
// }

// console.log(basicOp("+", 10, 4));

// =======================

const basicOperations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const basicOp = (op, x, y) => basicOperations[op](x, y);

console.log(basicOp("+", 10, 4));
