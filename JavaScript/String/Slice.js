// // O método slice() extrai uma parte de uma string.
// // O método slice() retorna a parte extraída em uma nova string.
// // O método slice() não altera a string original.

// Os parâmetros start e end especificam a parte da string a ser extraída.
// A primeira posição é 0, a segunda é 1, ... Um número negativo seleciona no final da string.

// Sintaxe: string.slice(start, end)

let nome = "Paulo Luiz Silva dos Santos Junior";

console.log(nome.slice(5));
console.log(nome.slice(5, -6));
