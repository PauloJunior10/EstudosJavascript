// Acessar arrays multidimensionais com indice
    //Imprima o número 8
    const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
      ];
      
      // const myData = myArray[2[1]]; esse é o jeito errado
      
      const myData = myArray[2] [1];
      
      console.log(myData)