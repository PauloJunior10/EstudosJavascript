
//-------------DESAFIO------------
// Some a idade de todos dentro do array pessoas

const pessoas = [
  {nome: 'joao',      idade: 52,  apelido:'Joãzinho'},
  {nome: 'maria',     idade: 34,  apelido:'mary'},
  {nome: 'alberto',   idade: 23,  apelido:'betinho'},
  {nome: 'lais',      idade: 45,  apelido:'laila'},
  ]
// esse é o método mais simples
// let soma = 0
//     for(let i =0; i < pessoas.length; i++){
//         soma += pessoas[i].idade
        
//     }
//     console.log(soma)

// abaixo é o método mais difícil
const soma = pessoas.map(value => {
  idade = value.idade 
  return idade

})

let total = 0;
for (let i = 0; i < soma.length; i++) {
  
  total += soma[i];
  // se desse o console log aqui, ele iria mostrar a soma de um em um
}
console.log(total)