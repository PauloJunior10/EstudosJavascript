// Exercicio na parte final


// por convenção  inicamos classes com letras maiusculas
class Usuario {

    // criamos as propriedade sem valores definidos previamente
    nome;
    idade;

    constructor(nome, idade) {
//  O constructor será o valor padrão das instâncias
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade
    }

    descrever(){
        console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade} então eu nasci em ${this.anoDeNascimento}`)
    }   
}

// Isso é uma instância, CLASSE é uma definição do OBJETO e INSTÂNCIA é uma ocorrência do OBJETO
let usuario1 = new Usuario("paulo", 25)
console.log(usuario1)

usuario1.descrever()

// Utilizando a classe pessoa, crie uma função que receba duas pessoas como parâmetro e retorne a mais velha.
// DICA 1 -- cria duas instâncias da classe pessoa
// DICA 2 -- envie esses objetos como parâmetros e acesse as propriedades.

let Vitor = new Usuario('Vitor', 25)
let Adam = new Usuario("Adam", 36)

function compararIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que que ${p2.nome}`)
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }

}

compararIdade(Vitor,Adam)



