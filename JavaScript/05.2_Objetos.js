// Trocando o nome com e sem espaço
const myDog = {
    name: "Coder",
    legs: 4,
    'seu apelido': 'codinho'
};

myDog.name = 'Happy Coder'

myDog['seu apelido'] = 'jojo'// Para trocar o nome com espaço, retiro o ponto e acrescento aspas.
console.log(myDog)

//          Testar objetos por propriedades
// Às vezes, é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o método de objetos .hasOwnProperty(propname) para determinar se aquele objeto possui o nome de propriedade fornecido.
// const myObj = {
//     top: "hat",
//     bottom: "pants"
//   };
  
//   console.log(myObj.hasOwnProperty("top"))