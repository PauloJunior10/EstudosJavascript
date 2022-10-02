//  COM CLASSES NAO PODEMOS ADICIONAR PROPRIEDADES DIRETAMENTE FORA DO CONSTRUCTOR, SOMENTE VIA PROTOTYPE;

// CLASSE ACEITA MÉTODOS 

class Cachorro{
    constructor(raca){
        this.raca =  raca
    }

    // criando método dentro da classe
    latir(){
        console.log('au au')
    }
}

Cachorro.prototype.patas = 4; // adicionei uma nova propriedade a class

let poodle = new Cachorro('poodle')

console.log(poodle.raca)
poodle.latir()

console.log(poodle.patas)