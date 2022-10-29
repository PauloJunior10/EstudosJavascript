// O método split() divide uma String em uma lista ordenada de substrings,
// Coloca essas substrings em um ARRAY e retorna o array. 
// A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método

const frase = 'Olá meu nome é Paulo'
const fraseEmArray = frase.split(' ')// sempre que tem um pedaço em branco, ele corta e armazena em um array


console.log(fraseEmArray)
console.log(fraseEmArray.length)
console.log(frase[2])
console.log(fraseEmArray[2])