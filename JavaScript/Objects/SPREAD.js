// SPREAD/ESPALHAMENTO

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"} // pegou os dados de cachorro e alterou apenas o nome
// console.log(gato)

const minhaFuncao = (obj) => {
	let novoObj = {...obj, vida:50}
	return novoObj
}
console.log(minhaFuncao({nome:'Bulbasaur', tipo:'planta', vida:10}))