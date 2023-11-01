
function areYouPlayingBanjo(name) {
    // Implement me
    let arrName = name.split("")

    let primeiraLetra = arrName.shift()
    let resultado = ""
    if (primeiraLetra == "R" || primeiraLetra == "r") {
        resultado = "tudo certo"
    }
    else {
        resultado = "errado"
    }
    return resultado;
}




console.log(areYouPlayingBanjo("roao"));

