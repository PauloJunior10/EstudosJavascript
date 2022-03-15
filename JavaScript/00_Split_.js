//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um ARRAY e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método
const frase = 'Olá meu nome é Paulo'
const fraseEmArray = frase.split(' ')

const retornArray = fraseEmArray[2]

console.log(fraseEmArray)
console.log(fraseEmArray.length)
console.log(retornArray)