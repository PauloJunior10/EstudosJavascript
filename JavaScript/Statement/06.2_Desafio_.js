
//-------------DESAFIO------------
// Some a idade de todos dentro do array pessoas

const pessoas = [
  {nome: 'joao',      idade: 52},
  {nome: 'maria',     idade: 34},
  {nome: 'alberto',   idade: 23},
  {nome: 'lais',      idade: 45},
  ]

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