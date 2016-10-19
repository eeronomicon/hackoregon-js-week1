'use strict';

function min(a, b) {
  if (a >= b) {
    return a;
  } else{
    return b;
  }
}

console.log("min");
console.log(min(2,1));
console.log(min(2,2));
console.log(min(2,3));


function isEven(number) {
  var increment = (number < 0 ? 2: -2);
  if (number === 0 ) {
    return "is even";
  } else if (number === 1) {
    return "is odd";
  } else {
    return isEven(number + increment);
  }
}

console.log("");
console.log("isEven");
console.log("50 " + isEven(50));
console.log("75 " + isEven(75));
console.log("-1 " + isEven(-1));

function countBs(inputWord) {
  var bCount = 0;
  for (var i = 0; i < inputWord.length; i++) {
    bCount += (inputWord.charAt(i) === "B" ? 1: 0);
  }
  return bCount;
}

console.log("");
console.log("countBs");
console.log("BuBuBulalal: " + countBs("BuBuBulalal"));
console.log("BabaBaLoo: " + countBs("BabaBaLoo"));

function countChar(inputWord, inputLetter) {
  var letterCount = 0;
  for (var i = 0; i < inputWord.length; i++) {
    letterCount += (inputWord.charAt(i) === inputLetter ? 1: 0);
  }
  return letterCount;
}

console.log("");
console.log("countChar");
console.log("BuBuBulalal: " + countChar("BuBuBulalal", "a"));
console.log("BabaBaLoo: " + countChar("BabaBaLoo", "a"));
