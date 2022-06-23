// SPREAD/ESPALHAMENTO

// Ex1
function quantidadeIndefinida(...num) {
	console.log(num)
}

quantidadeIndefinida(2,5,6,7)
// se eu não tivesse colocado spread ele teria impresso apenas o o primeiro numero

// eX:1
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"} // pegou os dados de cachorro e alterou apenas o nome
// console.log(gato)


// Ex:2
// const minhaFuncao = (obj) => {
// 	let novoObj = {...obj, vida:50}
// 	return novoObj
// }
// console.log(minhaFuncao({nome:'Bulbasaur', tipo:'planta', vida:10}))