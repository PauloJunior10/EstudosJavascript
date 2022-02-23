// SPREAD/ESPALHAMENTO

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"} // pegou os dados de cachorro e alterou apenas o nome
console.log(gato)