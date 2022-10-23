
// por convenção  inicamos classes com letras maiusculas
class Usuario {

    // criamos as propriedade sem valores definidos previamente
    nome;
    idade;

    constructor(nome, idade) {
//  O constructor será o valor padrão das instâncias
        this.nome = nome
        this.idade = idade
    }

    descrever(){
        console.log(`Meu Nome é ${this.nome} e minha idade é ${this.idade}`)
    }   
}

// Isso é uma instância, CLASSE é uma definição do OBJETO e INSTÂNCIA é uma ocorrência do OBJETO
let usuario1 = new Usuario("paulo", 25)
console.log(usuario1)

usuario1.descrever()



