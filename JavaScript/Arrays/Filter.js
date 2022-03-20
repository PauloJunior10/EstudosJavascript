// Na prática, ele faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback e armazena o resultado em uma nova variável do tipo array.

// Portanto, o resultado será o de todos os elementos que satisfaçam a condição do filtro. Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter().

//Retorne os númerros  maiores que 10

// const numeros  = [5,23,43,2,7,8,9,24,47,56]
// const numMaiorQue10 = numeros.filter(num => num > 10) // aqui eu usei uma arrow function

// console.log(numMaiorQue10)


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra a

const pessoas = [
{nome: 'joao',      idade: 52},
{nome: 'maria',     idade: 34},
{nome: 'alberto',   idade: 23},
{nome: 'lais',      idade: 45},
]


const nomeMaiorQue5 = pessoas.filter(obj => obj.nome.length > 5)
const maiorQue50 = pessoas.filter(obj => obj.idade > 50)
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
})


console.log(nomeMaiorQue5)
// console.log(maiorQue50)
// console.log(nomeTerminaComA)