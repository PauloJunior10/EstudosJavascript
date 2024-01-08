// Valores falsy são aqueles que são traduzidos como false quando avaliados em um contexto booleano, são eles false, null, undefined, “”(string vazia), 0 (zero), NaN (not a number) e também document.all em alguns browsers (mas você não deveria se preocupar com isso). Todos os outros valores são considerados truthy.

console.log(typeof null, typeof undefined)

console.log(null == undefined) // aqui ele fala que é true pq os dois são vazios

console.log(null === undefined)

console.log(null === false)