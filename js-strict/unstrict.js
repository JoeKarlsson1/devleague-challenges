//Added 'use strict' t code to enable strict mode.
'use strict';

//Created an array that contains all the small dogs
var dogs = {
  small : [ 'chihuahua','dachshund' ]

  //small: "dachshund"
};

var bird = true;

//Created an array that contains all of the big cats.
var cats = {
  big_cat : [ 'tiger', 'cheetah' ],
  biger_cat : 'lion',
  small_cat : 'calico'

  //big_cat: "cheetah"
}

var fish = false;

//Moved if check into function - then call the function
function smallDogs(dogs) {
  console.log(dogs.small);
}

smallDogs(dogs);

function bigCats(cats) {
  var arb = -1; //Declared arb
  if (arb <= 0) {
    console.log(cats.big_cat);
    arb++; //inc arb??? Dunno what this is supposed to do, but it fixes the scope issues.
  }
}
bigCats(cats);

var i = undefined;
for (i = 0; i < 10; i++) {
  var functioning = function() {
    console.log('We need another for loop??');
  }
  functioning();
}

// test using `node unstrict.js`