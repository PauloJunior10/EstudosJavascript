// o map() executa uma função de transformação em todos os elementos de uma determinada lista , e retorna uma nova lista como resultado.

// Para cada Elemento:
// Retorne uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave ID em cada objeto
const pessoas = [
    {nome: 'joao',      idade: 52},
    {nome: 'maria',     idade: 34},
    {nome: 'alberto',   idade: 23},
    {nome: 'lais',      idade: 45},
    ]

    const nome = pessoas.map(function(obj){
        return obj.nome
    })
    const  semNome = pessoas.map( obj =>{ 
         delete obj.nome
         return obj
    }) 

    const addId = pessoas.map(function(obj, index){
        obj.id = (index + 1) // seu eu não colocasse ' + 1' ele iria começar pelo índice zero
        return obj 
    })


    // Acima, todos os maps alterram o array original, mas aqui não pq ele criou um novo objeto
    const newAddId = pessoas.map(function(obj, index){
        newobj = {...obj}
        newobj.id = (index + 1)
        return newobj
    })

    //console.log(nome)
    //console.log(semNome)
    //console.log(addId)
    //console.log(newAddId)