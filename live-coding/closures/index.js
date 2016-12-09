'use strict';

let money = 55.50;
let coffeeCost = 8.50;

const drinkCoffee = (function(){
  let cupsDrunk = 0;

  return function() {
    if( money >= coffeeCost ){
      money -= coffeeCost;
      cupsDrunk++;
    }
    return cupsDrunk;
  };
})();

let count;
count = drinkCoffee(); // 1
count = drinkCoffee(); // 2
count = drinkCoffee(); // 3

console.log('count:', count ); // 3
console.log('money: ', money); //30