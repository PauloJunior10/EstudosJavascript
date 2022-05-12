
const Objeto = {
  nome: "Paulo",
  idade: 29,
  profissão: "Programador",

  anoDeNascimento: function(){
    this.ano = (2022 - this.idade);
    return this.ano
  }
}
// Objeto.anoDeNascimento()

console.log(Objeto.ano);
