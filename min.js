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
  if (number === 0 ) {
    return "is even";
  } else if (Math.abs(number) === 1) {
    return "is odd";
  } else {
    return isEven(Math.abs(number) - 2);
  }
}

console.log("");
console.log("isEven");
console.log("50 " + isEven(50));
console.log("75 " + isEven(75));
console.log("-1 " + isEven(-1));
console.log("-22 " + isEven(-22));

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


// function foo() {
//     var a = 2;
//     function bar() {
//         console.log( a );
//     }
//     return bar;
// }
// var baz = foo();
// baz();


var fn;

function foo() {
    var a = 2;
    function baz() {
        console.log( a );
    }
    fn = baz;
}
function bar() {
    fn();
}
foo();
bar();


// for (var i=1; i<=5; i++) {
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
// }

// for (var i=1; i<=5; i++) {
//     (function(j){
//         setTimeout( function timer(){
//             console.log( j );
//         }, j*1000 );
//     })( i );
// }


var amount = 0;

function makeAdder(amount) {
	return function(number) {
		return number + amount;
	};
}
var addFive = makeAdder(5);
console.log(addFive(3));

console.log(amount);
