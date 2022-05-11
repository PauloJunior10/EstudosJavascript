//  dois modos distintos de acessar objetos

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
//   console.log(jonas);
  
// Abaixo são dois modos, através do ponto e dos colchetes

//   console.log(jonas.lastName);
//   console.log(jonas['lastName']);
  

// Abaixo é colocado uma maneira que apenas com colchetes é possível
//   const nameKey = 'Name';
//   console.log(jonas['first' + nameKey]);
//   console.log(jonas['last' + nameKey]);
  
// console.log(jonas.'last' + nameKey) aqui ele dá erro

// Abaixo é feita uma pergunta e de acordo com a resposta é feita uma condição.
//  Sabemos que undefinied é falso, portanto podemos criar uma lógica para quando o usuário tentar acessar um valor que não existe
  
//   const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  
//   if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
//   } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
//   }


//  Abaixo está duas maneiras de acrescentar propriedades ao objeto
  
  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  console.log(jonas);

//  Sabemos que undefinied é falso, portanto podemos criar uma lógica para quando o usuário tentar acessar um valor que não existe

