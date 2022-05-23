// O every()método executa uma função para cada elemento do array.

// O every()método retorna truese a função retornar true para todos os elementos.

// O every()método retorna falsese a função retornar false para um elemento.

// O every()método não executa a função para elementos vazios.

// O every()método não altera o array original

const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 15; // experimente colocar maio do que 16
}

console.log(ages.every(checkAge))