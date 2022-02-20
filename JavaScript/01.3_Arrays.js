/*Qualquer tipo de entrada pode ser removida de um array - numbers, strings e até mesmo arrays aninhados.   */

// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
//O primeiro console.log exibirá o valor 6 e o segundo exibirá o valor [1, 4]


//          ACESSANDO ARRAYS ANINHADOS
const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  console.log(ourPets[0].names[1])
  console.log(ourPets[1].names[0])