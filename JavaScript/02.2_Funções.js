/**
 *          Diferenciar escopo global e local em funções
É possível ter as variáveis local e global com o mesmo nome. Quando você faz isso, a variável local tem precedência sobre a variável global.

Neste exemplo:
 */
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

console.log(myFun())

//A função myFun retornará a string Head porque a versão local da variável está presente.