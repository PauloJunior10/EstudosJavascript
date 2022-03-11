const pessoas = [
  {nome: 'joao',      idade: 52},
  {nome: 'maria',     idade: 34},
  {nome: 'alberto',   idade: 23},
  {nome: 'lais',      idade: 45},
  ]

for (let index = 0; index < pessoas.length; index++) {
  const element = pessoas[index].nome;
  if (element.toLowerCase().endsWith('a')) {
    console.log(element)
  }
 
}