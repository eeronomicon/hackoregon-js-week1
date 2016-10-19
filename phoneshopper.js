'use strict';

function phoneShopping(spendingCap, taxRate) {
  var inventory = [["Phone", 399.99], ["Accessory", 19.99]];
  var runningBalance = 0;
  var itemTotal = 0;
  var output = "";

  function calculateItemTotal(purchasePrice, taxRate) {
    return purchasePrice * (1 + taxRate);
  }

  for (var i = 0; i < 2; i++) {
    while (runningBalance < spendingCap) {
      itemTotal = calculateItemTotal(inventory[i][1], taxRate);
      if (runningBalance + itemTotal > spendingCap) {
        break;
      } else {
        runningBalance += itemTotal;
        output += (inventory[i][0] + ' purchased for $' + itemTotal.toFixed(2) + ' (Current balance: $' + runningBalance.toFixed(2) + ')\n');
      }
    }
  }

  return output;
}

console.log(phoneShopping(3000, 0.0825));
