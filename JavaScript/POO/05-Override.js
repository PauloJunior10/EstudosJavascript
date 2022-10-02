//  Override nas propriedad3s do prototyype

// sempre que adicionamos uma propriedade a um objeto, é criada um identica no prototype, entao podemos substituir a do prototype

//  COM CLASSES NAO PODEMOS ADICIONAR PROPRIEDADES DIRETAMENTE FORA DO CONSTRUCTOR, SOMENTE VIA PROTOTYPE;

class Cachorro{
    constructor(raca){
        this.raca =  raca
    }

    latir(){
        console.log('au au')
    }
}

Cachorro.prototype.raca ="labrador"

let poodle = new Cachorro('poodle')

console.log(poodle.raca)

console.log(Cachorro.prototype.raca)
