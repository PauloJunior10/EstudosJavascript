// Às vezes, é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o método de objetos .hasOwnProperty(propname) para determinar se aquele objeto possui o nome de propriedade fornecido.
const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  console.log(myObj.hasOwnProperty("top"))

//          Acessar objetos aninhados
// As subpropriedades de objetos podem ser acessadas ao encadear a notação de ponto e de colchetes.
  
const ourStorage = {
    "desk": {// aqui é uma "id"
      "drawer": "stapler" // aqui é uma "propriedade" e um "valor" respectivamente
    },
    "cabinet": {
      "top drawer": { // perceba que o console irá acesar a subpropriedade da propriedade colchetes, e como ela tem espaço, tem que usar o colchetes
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
    console.log(ourStorage.desk.drawer)
    console.log(ourStorage.cabinet["top drawer"].folder2)
  