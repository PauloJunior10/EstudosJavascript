function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

//   perceba que aqui existem dois eventos, um quando passa o mouse e outro quando retira
function mOver(obj) {
  obj.innerHTML = "Thank You";
}

function mOut(obj) {
  obj.innerHTML = "passe novamente";
}

//   aqui sao funcoes de cliques
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}
