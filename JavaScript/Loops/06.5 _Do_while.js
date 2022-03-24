//..........DO...WHILE....
// A condição para executar o bloco de código é, se true, o loop começará novamente, caso contrário, terminará.

// A) adicione só números ímpares até 20, a partir de 5 
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i += 2;
} while (i < 20)

console.log(ourArray)