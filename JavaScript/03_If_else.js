/**
 *               Introduzir instruções else if
Se você tem múltiplas condições que precisam ser resolvidas, você pode encadear as instruções if junto com instruções else if.

OBS: CUIDADO COM A ORDEM DAS CONDIÇÕES, ELE SEMPRE VAI VERIFICAR A PRIMEIRA QUE CORRESPONDER
 */

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(5))
