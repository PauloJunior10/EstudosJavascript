//  Dada duas arrays de inteiros positivos, calcule a multiplicação de cada array e retorne a diferença entre as arrays em um número positivo.

function findDifference(a, b) {
    let array1 = 1
    let array2 = 1

    a.forEach(obj => {
        array1 *= obj
    });

    b.forEach(obj => {
        array2 *= obj
    })
    
    return array1 > array2 ? array1 - array2 : array2 - array1


  }

  console.log(findDifference([5,6,1],[4,2,6]))

//   Modo mais fácil
function findDifference(a, b) {
    return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2]);
  }

  console.log(findDifference([4,2,6], [5,6,1]))