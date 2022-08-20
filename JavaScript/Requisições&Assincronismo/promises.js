const myPromise = new Promise((resolve,reject) => {
    const nome = 'Matheus'

    if(nome === 'Mateus'){
        resolve('Usuário Matheus Encontrado')
    }else{
        reject('O Usuário Matheus Não Foi Encontrado')
    }
})

myPromise.then((data) => {
    console.log(data)
})