// Descubra um "intervalo aleatório" entre dois números.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  console.log(randomRange(4,8))

//   Explicação do Exercício
// Prestar atenção na ordem de agrupamento da operação matemática

// 1 - Math.random()gera nosso número aleatório entre 0 e ≈ 0,9.
// 2 - Resolve a parte entre parênteses (myMax - myMin + 1).
// 3 - Multiplica o random com o resultado da operação entre parênteses
// 4 - Soma o resultado da multiplicação com Mymin
// 5 - Arredonda esse número pra baixo
