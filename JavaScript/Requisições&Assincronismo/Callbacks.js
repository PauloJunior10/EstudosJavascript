// aqui é um exemplo de função assíncrona, ela vai executar a última linha e depois executa a função setTimeout

// Se fosse uma função síncrona ela teria que aguardar a função setTimeout pra poder executar o restante

// exemplo de callback é porque um função é chamada dentro de outra, exemplo na função setTimeout

function alertar(){
    console.log("Opa,tudo bem?");
}
let nome='Bonieky';
setTimeout(alertar,3000); // AQUI ELE VAI ESPERAR 3 SEGUNDOS PRA EXECUTAR ESSA FUNÇÃO
let sobrenome = 'Lacerda';
console.log("NOME COMPLETO ="  + nome + " " +  sobrenome)
