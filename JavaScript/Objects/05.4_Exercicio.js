// Dada a seguinte função, imprima no console o que o usuário deseja saber, nome, idade ou profissão. Caso o usuário digite algo diferente desses valores imprima a seguinte mensagem "Por favor! digite nome, idade ou profissão".
// Desafio faça a mesma coisa usando Objeto no lugar do switch

// function transformar(value) {

//   let resultado = ""
  
//   switch (value) {
//     case "nome":
//       resultado = "Paulo"
//       break;
//     case "idade":
//       resultado = "29"
//       break;
//     case "profissão":
//       resultado = "Programador"
//       break;
//     default:
//       resultado = "Por favor! digite nome, idade ou profissão"
//   }
//   return resultado // tem que colocar o return ou então ele retorna undefined
// }

// console.log(transformar("idade"))

// ===============================
 function transformar(value) {

let Objeto = {
  nome: "Paulo",
  idade: "29",
  profissão: "Programador"
}

resultado = Objeto[value];//Veja que aqui ele acessou com colchetes
//   resultado = Objeto.value; aqui daria undefined

    if (Objeto[value]) {
    return Objeto[value];
  } else {
    return "Solicitação errada, coloque nome, idade ou profissão";
  }
 }

console.log(transformar("profissão"))
