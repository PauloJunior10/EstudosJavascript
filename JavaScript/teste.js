const pessoa = {
    primeiroNome: "Paulo",
    sobreNome: "Junior",
    id: 1,
    nomeCompleto: function (){
        return this.primeiroNome+ " "+this.sobreNome
    }
} 

console.log(pessoa.nomeCompleto())