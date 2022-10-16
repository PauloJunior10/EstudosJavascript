
// Faça um programa que lê lista de valores numéricos e retorna a maior, a menor, e o resultado da divisão destas duas variáveis retornadas, e informa se existe alguma outra variável na lista, que tem o mesmo valor do resultado da divisão. Considere a seguinte lista para seu exercício: 3,19,10,22,23,9,7,32,2,16,21,13

const lista = [3,19,10,22,23,9,7,32,2,16,21,13]
const max = Math.max(...lista)
const min = Math.min(...lista)
const div = max/min

const semelhante = lista.filter(num => num == div)

let result = "";

semelhante > 1 ? result = "Existe uma variável na lista que tem o mesmo valor do resultado da divisão" : result = "Não existe uma variável na lista que tem o mesmo valor do resultado da divisão";

console.log(`O maior valor da lista de números é ${max}, e o menor valor da lista de numeros é ${min}, o resultado da divisão desses números é ${div}. ${result}`)
