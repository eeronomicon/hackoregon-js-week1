
function countLetter(inputLetter) {
  var countChar = function(inputWord) {
    var letterCount = 0;
    for (var i = 0; i < inputWord.length; i++) {
      letterCount += (inputWord.charAt(i) === inputLetter ? 1: 0);
    }
    return letterCount;
  }
  return countChar;
}

var countB = countLetter("B");
console.log(countB("BaBeBaBoBaLoo"));

var countC = countLetter("C");
console.log(countC("CaCoCiCuBaBeCuCo"));

console.log("#########");

function isPrime(inputNumber) {
  if (inputNumber <= 0) {
    return false;
  } else if (inputNumber === 2 ) {
    return true;
  } else {
    for (var i = 2; i <= Math.sqrt(inputNumber)/2; i++) {
      if (inputNumber % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log("23: " + isPrime(23));
console.log("17: " + isPrime(17));
console.log("50: " + isPrime(50));
console.log("201: " + isPrime(201));

console.log("#########");
