// O toFixed()método converte um número em uma string.

// O toFixed()método arredonda a string para um número especificado de decimais.



let a = 5.4563443234
na = "R$ " + a.toFixed(3)

// Observação
// Se o número de decimais for maior que o número, zeros serão adicionados.

let b = 5.4
nb = "R$ " + b.toFixed(4)

console.log(na)
console.log(nb)
// console.log( na + nb) aqui ele NÃO soma pq o método transforma o número em string