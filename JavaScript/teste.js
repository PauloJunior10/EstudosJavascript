class User{
  constructor(id, email, senha){
    this.id = id
    this.email = email
    this.senha = senha
  }
}

export class Estudante extends User{
 contructor(id, email, senha, sala){
  super(id, email, senha)
  this.sala = sala
 }
}

let Paulo = new Estudante(
  Date.now().toString,
  "sadlfkj@hotmail.com",
  "abc123",
  "sala 2"
)

console.log(Paulo)