//      Se a propriedade do objeto que você está tentando acessar possui um espaço no seu nome, você precisará usar a notação de colchetes.
  const myObj = {
    'Nome com espaço': "Kirk",
    SemEspaco: "USS Enterprise"
  };
  
  console.log(myObj["Nome com espaço"],' e ', myObj.SemEspaco)

 // ADICIONANDO E REMOVENDO ELEMENTOS DOS OBJETOS:
 myObj.Dog = 'Rex'
 myObj["Sobrenome"] = 'Luiz'

 console.log(myObj)
 
//  delete myObj.dog
//  console.log(myObj)