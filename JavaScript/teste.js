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
  
}
console.log(total)