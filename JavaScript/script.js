const myPromise = new Promise((resolve,reject) => {
    const nome = 'Mateus'

    if(nome === 'Mateus'){
        resolve('Usuário Matheus Encontrado')
    }else{
        reject('O Usuário Matheus Não Foi Encontrado')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// Encadeamento de then's
const myPromise2 = new Promise((resolve,reject) => {
    const nome = 'Mateus'

    if(nome === 'Mateus'){
        resolve('Usuário Matheus Encontrado')
    }else{
        reject('O Usuário Matheus Não Foi Encontrado')
    }
})

myPromise2
.then((data) => {
    return data.toUpperCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch
const myPromise3 = new Promise((resolve,reject) => {
    const nome = 'Mateus'

    if(nome === 'Mateus'){
        resolve('Usuário Matheus Encontrado')
    }else{
        reject('O Usuário Matheus Não Foi Encontrado')
    }
})

