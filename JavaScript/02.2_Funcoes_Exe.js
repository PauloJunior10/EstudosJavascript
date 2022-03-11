const objeto1 = {
    nome: "Giulia",
    idade: 25,
    profissao: "Engenheira"
   }

const objeto2 = {
    nome: "Nathália",
    idade: 25,
    profissao: "Administradora"
}

function umaFuncao (objetoX,objetoY) {
    let arrayX = [objetoX.nome, objetoX.nome.length, objetoX.idade, objetoX.profissao, objetoX.profissao.length]
    let arrayY = [objetoY.nome, objetoY.nome.length, objetoY.idade, objetoY.profissao, objetoY.profissao.length]
    return console.log(arrayX) + console.log(arrayY)
}
umaFuncao(objeto1, objeto2)