// O método sort() classifica um array em ordem alfabética
//O método reverse() pode ser usado depois ou sem o método sort, em cada caso o resultado é diferente


const frutas = ["Banana","Abacate", "Manga","Melancia","Jaca"]
console.log(frutas.sort())

// console.log(frutas.reverse())
//  console.log(frutas.sort().reverse()) // posso usar assim tbm
// console.log(frutas.reverse()) // Se usar o método reverse sem antes usar o método SORT ele ordena o array do último ao primeiro

// ======================================

// FUNÇÃO DE COMPARAÇÃO
// Para mais explicações https://www.w3schools.com/js/js_array_sort.asp

// O método sort() pode dá errado se usado em números, pois ele pode considerar 100 antes de 20, pois ele considera o primeiro número.
// Por isso usamos uma função de comparação, olhe no site para entender como ela funciona
const pontos = [40, 100, 1, 5, 25, 10];
console.log(pontos.sort(function(a, b){return a - b})) //ordem crescente
console.log(pontos.sort(function(a, b){return b - a})); // ordem descrecente é só inverter

// =================================

// Classificando uma matriz em ordem aleatória
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return 0.5 - Math.random()});

// =======================================
// Encontre o valor de matriz mais alto (ou mais baixo)
// Não há funções internas para encontrar o valor máximo ou mínimo em uma matriz.

// No entanto, depois de classificar uma matriz, você pode usar o índice para obter os valores mais altos e mais baixos.

// Ordenação crescente:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

// Ordenação decrescente:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

// ============================
// Classificar uma matriz inteira é um método muito ineficiente se você deseja encontrar apenas o valor mais alto (ou mais baixo). Existem métodos muito mais eficientes, porém são mais complexos, caso precise, pesquise. No próprio site do w3schools tem algums no final da página