// Object.freezefunciona em valores e, mais especificamente, valores de objeto . Isso torna um objeto imutável, ou seja, você não pode alterar suas propriedades.
//  Qualquer tentativa de alterar o objeto será rejeitada, com um erro sendo lançado se o script estiver executando em modo estrito.


let obj = {
    name:"FreeCodeCamp",
    review:"É TOP"
  };
   Object.freeze(obj);

  obj.review = "É HORRÍVEL"; // não altera o rewiew
   obj.newProp = "Test"; // não acrescenta uma nova propriedade
  console.log(obj); 