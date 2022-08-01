// document.getElementById('exemplo').innerHTML = "Pedro"

document.getElementsByClassName('lista')[0].innerHTML = 'Item Alterado' // lembrando que coloco o índice do array que quero selecionar pq aqui ele retorna um array com as classes

document.getElementsByTagName("button")[0].innerHTML = 'Clique aqui'

document.getElementsByName("email")[0] = 'Alterado'

// Tbm posso usar o queryselector

document.querySelector('#exemplo').innerHTML = 'nome altrado'

document.querySelector('.lista').innerHTML = 'itens da lista alterados'