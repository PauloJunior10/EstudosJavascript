// https://www.freecodecamp.org/portuguese/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

// toda função recursiva precisa dos seguintes elementos pra funcionar:
// parâmetro acumulador (opcional)
// Condição de saída no início
// lógica própria (opcional)
// Chamada recursiva ao final

// Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo valor.

function rangeOfNumbers(  
  startNum, 
  endNum,
  result = [ startNum ]
) {

  if (startNum >= endNum) {
     return result
  }
  // condição de saída
  
  result.push( startNum + 1 )
  // lógica caso a condição de saída não seja satisfeita 

  return rangeOfNumbers( startNum + 1, endNum, result) 
  // chamada recursiva incremental
  
};

console.log(rangeOfNumbers(1,10))






// function rangeOfNumbers(startNum, endNum) {
//     if (endNum - startNum === 0) {
//       return [startNum];
//     } else {
//       var numbers = rangeOfNumbers(startNum, endNum - 1);
//       numbers.push(endNum);
//       return numbers;
//     }
//   }

//   console.log(rangeOfNumbers(3,10))

// function rangeOfNumbers(startNum, endNum) {
//     return startNum === endNum
//       ? [startNum]
//       : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
//   }

//   console.log(rangeOfNumbers(3,10))