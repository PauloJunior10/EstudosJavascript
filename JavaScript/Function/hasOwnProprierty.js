//              Testar objetos por propriedades
// Às vezes, é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o método de objetos .hasOwnProperty(propname) para determinar se aquele objeto possui o nome de propriedade fornecido. .hasOwnProperty() retorna true ou false se a propriedade for encontrada ou não.

const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  console.log(myObj.hasOwnProperty("top"))
  console.log(myObj.hasOwnProperty("middle"))