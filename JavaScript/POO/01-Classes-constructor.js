 
 // por convenção  inicamos classes com letras maiusculas
function Usuario(nome, idade, profissao) {
    
    // criamos uma propriedade  e setamos ela com o parametro
    this.nome = nome 
    this.idade = idade
    this.profissao = profissao
}

let usuario1 = new Usuario("PAULO", 25, "DEV")

console.log(usuario1)