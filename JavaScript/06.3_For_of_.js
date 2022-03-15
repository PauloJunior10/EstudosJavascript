// A instrução for of  faz um loop pelos valores de um objeto iterável.
// Ele permite que você faça um loop sobre estruturas de dados iteráveis, como Arrays, Strings, Maps, NodeLists e muito mais:

// AQUI RECEBE UMA STRING E PERCORRE ELA
//a)
// let language = "JavaScript";

// let text = "";

 //  variavel index recebe 'de'/'of' language
// for (let index of language) {
//   text += index + '\n';
  
// }
// console.log(text)


//b)
 const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 
 // variavel item recebe 'do'/'of' arrayoriginal
    for (item of arrayOriginal) {
        console.log(item)
        
    }
        
