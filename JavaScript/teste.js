
function myFunction(array) {
  let novaArray = array.map((numero,index,array) => {
    return numero*index
})
return novaArray
}
console.log(myFunction([124,780,20]))