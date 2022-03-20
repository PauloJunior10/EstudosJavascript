// Uma função recursiva é uma função que chama a si mesma até encontrar uma instrução de parar. Essa técnica é chamada de recursão.

//OBS: existe um limite pra ela ser chamada, isso evita de entrar em um loop infinito, teste 10000 por exemplo
function recursiva (max){
    if(max >= 1000000) return; // o return significa que a função acaba aqui se a condição for true
    console.log(max); // se o console for colocado aqui, o numero 100 ñ é impresso, porém se for colocado antes da condição aí ele é impresso
    max++;
    recursiva(max);
}
recursiva(23)