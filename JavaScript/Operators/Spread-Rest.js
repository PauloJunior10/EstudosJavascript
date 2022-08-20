//  A sintaxe de rest parameter (parâmetros rest) nos permite representar um número indefinido de argumentos como um array.


// 1) Vai incluir o primeiro elemento no primeiro parâmetros e o  restante no segundo parametro
// function mostrarListas (montadoras, ...carros){
//     console.log(montadoras)
//     console.log(carros)
// }

// mostrarListas("Fiat", "Palio", "Uno", "Mobi" )

// 2) 
const numeros = [1,54,65,23,12,87,09,5,14]

// console.log(Math.max(numeros)) aqui dará erro pq ele entende que numeros é uma array e não números
console.log(Math.max(...numeros)) // aqui funciona pq seria como se eu tivesse pegando cada número dessa array e espalhasse dentro do método