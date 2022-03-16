
function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) return false;
  }
  return number > 1;
}

if(isPrime(2)){
  console.log('é primo')
}else{
  console.log('não é primo')
}