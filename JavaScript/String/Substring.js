// O substring()método extrai caracteres, entre dois índices (posições), de uma string e retorna a substring.

// O substring()método extrai caracteres do início ao fim (exclusivo).

// O substring()método não altera a string original.

// Se start for maior que end, os argumentos são trocados: (4, 1) = (1, 4).

// Valores iniciais ou finais menores que 0 são tratados como 0.

let nome = 'Paulo Luiz Silva dos Santos Junior'
console.log(nome.substring(5))

// console.log(nome.substring(5, -6)) Aqui funcionaria no método slice