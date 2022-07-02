// falso && (qualquer coisa) é avaliado como falso através de curto-circuito
// console.log(1 ==2 && "Olá mundo!")

// false || (qualquer coisa ) Imprime a segunda expressão pq ela é verdadeira
// console.log(1 ==2 || "Olá mundo!")

// true && true = Verifica se a primeira condição é true e imprime a segunda se for true, se for false, toda a expresão é false
console.log("Olá mundo" && "Olá pessoas")
console.log("Olá mundo" && 1 == 2)

// true || (qualquer coisa ) Aqui a primeira condição é suficiente independente da segunda, e ele já imprime a primeira
// console.log( "Olá mundo!" || "olá pessoas")


// 1º Essa forma é sem short-circuito
// function boasVindas (nome = "Desconhecido"){
//     console.log(`Seja bem-vindo ${nome}!`)
// }

// boasVindas()
// boasVindas("Rodrigo!")

// ============================

// 2º essa forma usa short-circuit OR
// function boasVindas2 (nome){
//     nome = nome || "desconhecido",
//     console.log(`Até mais ${nome} !`)
// }

// boasVindas2()
// boasVindas2("Paulo")

//3º Aqui usaremos short-circuirt and
// console.log (1 == 2 && "Olá mundo") // false pq a primeira é false
// console.log (1 == 1 && "Olá mundo, aqui é verdadeiro") // verifica se o primeiro é true e imprime o subsequente
// console.log (1 == 1 && 2 == 3) // false pq o segundo é false
// console.log (1 == 1 && 2 == 2 && "O terceiro é impresso")