//      Se a propriedade do objeto que você está tentando acessar possui um espaço no seu nome, você precisará usar a notação de colchetes.
  const myObj = {
    'Space Name': "Kirk",
    'More Space': "Spock",
    NoSpace: "USS Enterprise"
  };
  
  //console.log(myObj["Space Name"],'E', myObj.NoSpace)

 // ADICIONANDO E REMOVENDO ELEMENTOS DOS OBJETOS:
 myObj.dog = 'rex'
 console.log(myObj)
 delete myObj.dog
 console.log(myObj)