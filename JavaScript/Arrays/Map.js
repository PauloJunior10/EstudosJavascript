//https://devdocs.io/javascript/global_objects/array/map

// O método map() Basicamente, faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um NOVO array.

//a)
// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]

// b)
// O código a seguir mostrar como o método map funciona quando a função callback possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o map itera sobre o array original.
// var numbers = [1, 4, 9];
// var doubles = numbers.map( x => x*2)
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]

//c)
// Para cada Elemento:
// Retorne uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave ID em cada objeto
// const pessoas = [
//     {nome: 'joao',      idade: 52},
//     {nome: 'maria',     idade: 34},
//     {nome: 'alberto',   idade: 23},
//     {nome: 'lais',      idade: 45},
//     ]

//     const nome = pessoas.map(function(obj){
//         return obj.nome
//     })
//     const  semNome = pessoas.map( obj =>{ 
//          delete obj.nome
//          return obj
//     }) 

//     const addId = pessoas.map(function(obj, index){
//         obj.id = (index + 1) // seu eu não colocasse ' + 1' ele iria começar pelo índice zero
//         return obj 
//     })


//     // Acima, todos os maps alterram o array original, mas aqui não pq ele criou um novo objeto
//     const newAddId = pessoas.map(function(obj, index){
//         newobj = {...obj}
//         newobj.id = (index + 1)
//         return newobj
//     })

    // console.log(nome)
    // console.log(semNome)
    //console.log(addId)
    //console.log(newAddId)