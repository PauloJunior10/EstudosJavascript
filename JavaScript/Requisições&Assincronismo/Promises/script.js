// 1)
const myPromise = new Promise((resolve,reject) => {
    const nome = 'Mateus'

    if(nome === 'Mateus'){
        resolve('Usuário Mateus Encontrado')
    }else{
        reject('O Usuário Mateus Não Foi Encontrado')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// 2) Encadeamento de then's
const myPromise2 = new Promise((resolve,reject) => {
    const nome = 'Mateus'

    if(nome === 'Mateus'){
        resolve('Usuário Mateus Encontrado')
    }else{
        reject('O Usuário Mateus Não Foi Encontrado')
    }
})

myPromise2
.then((data) => {
    return data.toUpperCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})

// 3) Retorno do catch
const myPromise3 = new Promise((resolve,reject) => {
    const nome = 'Adam'

    if(nome === 'Mateus'){
        resolve('Usuário Mateus Encontrado')
    }else{
        reject('O Usuário Mateus Não Foi Encontrado')
    }
})

myPromise3
.then((data) => {
    console.log(data)
})
.catch((error) =>{
    console.log('Aconteceu um erro ' + error)
})

// Resolver várias promessas com all
// Aqui ele só entrega o resultado depois que todas forem respondidas
const p1 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('P1 ok! Timeout!')
    }, 5000)
})

const p2 = new Promise((resolve,reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve,reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})

// 4) Várias promessas com RACE, é uma corrida, ela vai retornar o valor de quem for resolvida primeiro

const p4 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('P4 ok! Timeout!')
    }, 2000)
})

const p5 = new Promise((resolve,reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve,reject) => {
    resolve('P6 ok!')
})

const resolveAllRace = Promise.all([p4,p5,p6]).then((data) => {
    console.log(data)
})