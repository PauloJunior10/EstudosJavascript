const DATA = [
    {id: 1, title: 'first'},
    {id: 2, title: 'second'},
    {id: 3, title: 'third'},
    {id: 4, title: 'fourth'}

]

const upperData = DATA.map(item => item.title.toUpperCase())
console.table(upperData)