// filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true. 

// Portanto, o resultado será o de todos os elementos que satisfaçam a condição do filtro. Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter().

//Retorne os númerros  maiores que 10

// const numeros  = [5,23,43,2,7,8,9,24,47,56]
// const numMaiorQue10 = numeros.filter(num => num > 10) // aqui eu usei uma arrow function

// console.log(numMaiorQue10)


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra a

const pessoas = [
    {nome: 'joao',      idade: 52,  apelido:'Joãzinho'},
    {nome: 'maria',     idade: 34,  apelido:'mary'},
    {nome: 'alberto',   idade: 23,  apelido:'betinho'},
    {nome: 'lais',      idade: 45,  apelido:'laila'},
]

//Ele recebe e filtra os objetos do array selecionado, após isso ele estabelece uma condição, se a condição for true ele retorna todo o objeto que cumpriu a condição
const apelidos = pessoas.filter(obj => obj.apelido === 'mary')
const nomeMaiorQue5 = pessoas.filter(obj => obj.nome.length > 5)
const maiorQue50 = pessoas.filter(obj => obj.idade > 50)
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
})

console.table(apelidos)
//console.log(nomeMaiorQue5)
 //console.log(maiorQue50)
// console.log(nomeTerminaComA)