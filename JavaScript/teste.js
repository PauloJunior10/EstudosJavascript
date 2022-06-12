// Retorna um array, onde o PRIMEIRO elemento é a contagem de números positivos e o SEGUNDO elemento é a soma de números negativos.
// 0 não é positivo nem negativo.
// Se a entrada for uma matriz vazia ou for nula, retorne uma matriz vazia.

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) { // pra verificar se um array é vazio, colocamos .length == 0
    return [];
  } else {
    let arr = []; // criei uma array vazia
    const positivos = input.filter((obj) => obj > 0).length; // peguei a quantidade de numeros positivos
    arr.push(positivos); // coloqueio-os na array

    const negativos = input.filter((obj) => obj < 0); // filtrei os numeros negativos
    let sum = 0; // criei uma variável para fazer a soma
    for (let i = 0; i < negativos.length; i++) {
      sum += negativos[i];
    } // fiz um loop em que somava e atribuía os números negativos

    arr.push(sum); // coloqueio-os na array

    return arr;
  }
}
console.log(countPositivesSumNegatives([]));


