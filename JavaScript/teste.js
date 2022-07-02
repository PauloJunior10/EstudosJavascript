// José quer fazer compras, porém ele deseja saber o menor preço para decidir qual comprar.
// Para isso ele recebe uma lista com os preços de cada loja.
// Escreva uma função que retorne o menor e o maior valor

function minMax(arr) {
 let newArray = [0, 0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > newArray[1]) {
      newArray[1] = arr[index];
    }

    newArray[0] = newArray[1]

    for (let i = 0; i < arr.length; i++) {

     if (arr[i] < newArray[0]) {
       newArray[0] = arr[i];
     }
      
    }
  }
  return newArray; // fix me!
}

console.log(minMax([1, 7, 3, 9, 5]));
