// Tabuleiro de xadrez
// Escreva um programa que crie uma string que represente uma grade 8×8, usando caracteres de nova linha para separar as linhas. Em cada posição da grade há um espaço ou um caractere "#". Os personagens devem formar um tabuleiro de xadrez.

// Passar essa string para console.log deve mostrar algo assim:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// Quando você tiver um programa que gere esse padrão, defina uma ligação size = 8e altere o programa para que funcione para qualquer size, gerando uma grade com a largura e a altura especificadas.

function chessBoard(num) {
    let board = ""

    for (let y = 0; y < num; y++) {
        for (let x = 0; x < num; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    return board
}

console.log(chessBoard(8))