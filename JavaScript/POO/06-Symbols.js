// propriedades unicas que nao podem ser alteradas e nem criadas duas vezes

//  podemos utiliar como uma constante, so que para propriedade de objeto

class Cachorro{
    constructor(raca){
        this.raca =  raca
    }

    latir(){
        console.log('au au')
    }
}

let cor = Symbol();
Cachorro.prototype[cor] = 'amarelo'

console.log(Cachorro.prototype[cor])
