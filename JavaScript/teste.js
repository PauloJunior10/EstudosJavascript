function regressiva(n) {
  const newArray = []

  for (i = n; i > 0; i--) {
    newArray.push(i)
  }
  return newArray
}

console.log(regressiva(5))