// O método parseFloat vai preservar minhas casas decimais, diferente do parseInt(que retorna o inteiro)

let frase = "25.97";

let numero = parseFloat(frase);

console.log(typeof frase);
console.log(typeof numero);

console.log(numero + 25);

// como funciona a lógica, coloque o mouse por cima do método que ele mostra
let conversao = (string) => {
    string = Number
    return string
}

typeof  console.log(conversao("24"))