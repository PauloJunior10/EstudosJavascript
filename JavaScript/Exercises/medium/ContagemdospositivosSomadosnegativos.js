// Retorna um array, onde o PRIMEIRO elemento é a contagem de números positivos e o SEGUNDO elemento é a soma de números negativos. 
// 0 não é positivo nem negativo.
// Se a entrada for uma matriz vazia ou for nula, retorne uma matriz vazia.

function countPositivesSumNegatives(input) {
    let arr = []
  const positivos = input.filter((obj) => obj > 0).length
  arr.push(positivos)

  const negativos = input.filter(obj => obj < 0)
  let sum = 0;
    for (let i = 0; i < negativos.length; i++) {
        sum += negativos[i];
    }
   
   arr.push(sum)

  return arr

}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
