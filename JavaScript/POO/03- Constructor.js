//  com a versao do ESC6 , uma possibilifddade de criar uma classe(objeto) com constructor foi adicionada.
//  Entao nao precisamos mais criar por meio de uma funcao.

// por convenção  inicamos classes com letras maiusculas
class Usuario {
    constructor(nome, idade, profissao) {

        // criamos uma propriedade  e setamos ela com o parametro
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

let usuario1 = new Usuario("PAULO", 25, "DEV")

console.log(usuario1)