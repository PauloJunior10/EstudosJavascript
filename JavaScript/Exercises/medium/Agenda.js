// https://www.freecodecamp.org/portuguese/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];
//procurar perfil
// function lookUpProfile(firstName, prop) {    
//     let result = contacts.filter(obj => obj.firstName == firstName)

//     if (result == 0) {
//         return "No such contact";
//     } else {
//         return result[0][prop] ? `O nome é `+ firstName + ` e o dado que vc procura é `+ result[0][prop] : "No such property"; // usou um operador ternário
//     }
// }
//console.log(lookUpProfile("Sherlock", "lastName"))
//-----------------------------------------
// function lookUpProfile(name, prop) {
//     for (let x = 0; x < contacts.length; x++) {
//       if (contacts[x].firstName === name) {
//         if (contacts[x].hasOwnProperty(prop)) {
//           return contacts[x][prop];
//         } else {
//           return "No such property";
//         }
//       }
//     }
//     return "No such contact";
//   }
//console.log(lookUpProfile("Sherlock", "lastName"))
//------------------------------------------
function lookUpProfile(name, prop) { //prop = propriedade
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
console.log(lookUpProfile("Harry", "number"))