const nome = 'Paulo'

function imprimeNome(){
    console.log(nome)
}
//imprimeNome()

function imprimeNome2(){
    let nome = 'Luiz'
    imprimeNome()
}
imprimeNome2() // apesar de essa função conter uma variavel nome com outro dado, ela respeita a função que foi criada