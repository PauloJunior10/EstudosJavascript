// PARSE = PEGAR UMA STRING E TRANSFORMAR EM JSON
// STRINGFY = PEGA UM JSON E TRANSFORMA EM STRING

let pessoa ={nome : "Paulo", idade: 34, algo: null}

let pessoaString = JSON.stringify(pessoa)

console.log(pessoaString)