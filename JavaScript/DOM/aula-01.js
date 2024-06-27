document.title = "aprendendo DOM";

const element = document.getElementById("id01");
element.innerHTML = "NOVO Heading";

// Este exemplo ABAIXO encontra o elemento com id="main"e, em seguida, encontra todos <p>os elementos dentro de "main":

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");


y[2].innerHTML = "mudei aqui" 

// seguindo esta lógica, posso fazer inúmeras ações com o DOM. A seguir o link das diversas possibilidades https://www.w3schools.com/js/js_htmldom_document.asp





