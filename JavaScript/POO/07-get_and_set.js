class Cachorro{
    constructor(raca,cor){
        this.raca =  raca
        this.cor = cor
    }

   get getCor(){
    return this.cor
   }

   set setCor(cor){
    this.cor = cor
   }
}

let pastor = new Cachorro('pastor alemao', 'sem cor') // ants do doguinhho nascer
console.log(pastor)

pastor.setCor = 'Marrom'

console.log(pastor)
console.log(pastor.getCor)
