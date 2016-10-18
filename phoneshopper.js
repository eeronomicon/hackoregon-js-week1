'use strict';

var taxRate = 0.0825;
var inventory = [
  [
    // ['iPhone 6s', 499.99],
    // ['iPhone 7', 599.99],
    ['iPhone SE', 399.99]
  ],
  [
    // ['iPhone Charger', 19.99],
    // ['Bluetooth Earbuds', 49.99],
    // ['iSlinger Holster', 39.99],
    // ['Screen Protector', 9.99],
    ['Indestructo Case', 29.99]
  ]
];
var spendingCap = 3000;
var runningBalance = 0;
var itemTotal = 0;

function randomizer(cap) {
  return Math.floor(Math.random() * (cap));
}

function calculateItemTotal(purchasePrice, taxRate) {
  return roundPennies(purchasePrice * (1 + taxRate));
}

function roundPennies(amount) {
  return Math.round(amount * 100) / 100;
}

function overspent(amount) {
  if (amount > spendingCap) {
    return true;
  } else {
    return false;
  }
}

// var phoneOrAccessory = 0;

for (var i = 0; i < 2; i++) {
  while (runningBalance <= spendingCap) {
    var purchasedItem = randomizer(inventory[i].length);
    itemTotal = calculateItemTotal(inventory[i][purchasedItem][1], taxRate);
    runningBalance += itemTotal;
    if (overspent(runningBalance)) {
      runningBalance -= itemTotal;
      break;
    } else {
      console.log(inventory[i][purchasedItem][0] + ' purchased for $' + itemTotal + ' (Current balance: $' + roundPennies(runningBalance) + ')');
    }
  }
}

// while (runningBalance <= spendingCap) {
//   var purchasedItem = randomizer(inventory[1].length);
//   itemTotal = calculateItemTotal(inventory[1][purchasedItem][1], taxRate);
//   runningBalance += itemTotal;
//   if (overspent(runningBalance)) {
//     break;
//   } else {
//     console.log(inventory[1][purchasedItem][0] + ' purchased for $' + itemTotal + ' (Current balance: $' + roundPennies(runningBalance) + ')');
//   }
// }
