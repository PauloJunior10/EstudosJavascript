
function Cachorro (raca){
    this.raca = raca
}

// O ideal é que  os métodos sejam criados fora da classe

Cachorro.prototype.uivar = function(){
    console.log("Auuuu")
}

Cachorro.prototype.latir = function(){
    console.log("au au")
}

let husky = new Cachorro('Husky Siberiano')

husky.uivar();
husky.latir();