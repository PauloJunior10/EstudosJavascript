// Um professor quer sortear um dos seus seis alunos para apagar o quadro. Faça um programa que ajude ele, lendo o nome deles e escrevendo o nome do escolhido.

const alunos = ["Paulo", "Alex", "Helena", "Jamiel", "Benedita", "Carol"];
const numero = Math.floor(Math.random() * alunos.length);
console.log(alunos[numero]);