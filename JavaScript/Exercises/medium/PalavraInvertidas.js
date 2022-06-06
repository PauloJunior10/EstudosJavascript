// Escreva uma função que receba uma string de uma ou mais palavras e retorne a mesma string, mas com todas as palavras de cinco ou mais letras invertidas. As strings passadas consistirão apenas em letras e espaços. Os espaços serão incluídos somente quando mais de uma palavra estiver presente.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//========================
function spinWords(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length >= 5)
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
  }
  
  console.log(spinWords("Olá mundo meu nome é paulo"))
  //============
  
  // function spinWords(string){
  
  //   return string.split(' ').map((word) =>{
  //     return (word.length > 4) ? word.split('').reverse().join('') : word
  //   }).join (' ')
   
    // }
    
  // console.log(spinWords("Olá mundo meu nome é paulo"))
  
  ///================================
  
  
  