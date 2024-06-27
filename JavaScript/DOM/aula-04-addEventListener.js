// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Hello World!");
//   });

  let x = document.getElementById("myBtn");
  x.addEventListener("click", criandoAlerta);
  x.addEventListener("click", inclusao)

  function criandoAlerta(){
    alert("Hello World");
  }

  function inclusao(){
    alert("POSSO INCLUIR VÁRIOS ALERTS")
  }