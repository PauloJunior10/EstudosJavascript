// const pessoa = {
//     nome1: "paulo",
//     nome2: "junior"
// }

// const {nome1, nome2} = pessoa

// console.log(nome1)

// =================

// const retornaObjeto = () => {
//     const person = {
//       name: 'Marina',
//       age: 32,
//       profession: 'teacher'
//     }
  
//     return person
//   }
//   const result1 = retornaObjeto()
// console.log(result1)// retornou todo o objeto

// const { name, age, profession } = result1
// console.log(name)
// console.log(age)
// console.log(profession)
// ======================

// EXEMPLO COM ARRAY DE OBJETOS
const petsDaMazzi = [
    { nome: 'Laura', tipo: 'cachorra' },
    { nome: 'Leia', tipo: 'cachorra-boi' },
    { nome: 'Luke', tipo: 'cachorro-líquido' },
    { nome: 'Buda', tipo: 'gatita' },
    { nome: 'Baleia', tipo: 'gato-rebelde' }
  ]
  
  const [laura, leia, luke, buda, baleia] = petsDaMazzi
  
  console.log(laura)
  console.log(leia)
  console.log(luke)
  console.log(buda)
  console.log(baleia)