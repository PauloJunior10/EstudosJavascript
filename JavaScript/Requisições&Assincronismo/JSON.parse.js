// PARSE = PEGAR UMA STRING E TRANSFORMAR EM JSON
// STRINGFY = PEGA UM JSON E TRANSFORMA EM STRING

// Um uso comum do JSON é trocar dados de/para um servidor web.

// Ao receber dados de um servidor web, os dados são sempre uma string.

// Analise os dados com JSON.parse()e os dados se tornam um objeto JavaScript.

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

console.log(obj) 
console.log(obj.name)