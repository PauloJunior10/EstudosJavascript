/**
 * 
Se você possui muitas opções pra escolher, use uma instrução switch.
As instruções são executadas desde o primeiro case correspondente até que seja encontrado um break.
 */

function caseInSwitch(val) {
    let answer = "";  
    
    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case "raio":
        answer = "gamma";
        break;
      case "asa":
        answer = "delta";
        break;
        default:
        answer = "Esse dado não é válido";
    }
    
    return answer;
  }
  console.log(caseInSwitch("asa"))