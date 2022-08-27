// O ES2019 introduziu o Array.prototype.flat() método que cria um novo array com todos os elementos dos subarrays concatenados a ele recursivamente até uma profundidade especificada.

// Veja a seguir a sintaxe do flat()método:
// let newArray = arrayObject.flat([depth])

// O depthparâmetro especifica a profundidade com que o método nivela a estrutura da matriz. O padrão é 1.

// 1) O exemplo a seguir mostra como nivelar uma matriz de números:

// const numbers = [1, 2, [3, 4, 5]];
// const flatNumbers = numbers.flat();

// console.log(flatNumbers);

// Neste exemplo, não passamos o argumento de profundidade para o flat()método, portanto, a profundidade é 1 por padrão. O flat()método concatenou todos os elementos do array aninhado [3,4,5] aos elementos do novo array.

// Observe que o flat()método cria um novo array e não altera o array original:

// console.log(numbers);

// 2) O exemplo a seguir nivela uma matriz com dois níveis de profundidade:
// const numbers = [1, 2, [3, 4, 5, [6, 7]]];
// const flatNumbers = numbers.flat(2);

// console.log(flatNumbers);

// 3) Quando você não conhece o nível de profundidade, pode passar o Infinitymétodo flat()para concatenar recursivamente todos os elementos dos sub-arrays no novo array:
// const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
// const flatNumbers = numbers.flat(Infinity);

// console.log(flatNumbers);

// 3) Se um array tiver slots vazios, você pode usar o flat()método para remover os buracos, assim:

// const numbers = [1, 2, , 4, , 5];
// const sequence = numbers.flat();

// console.log(sequence);