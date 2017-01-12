var dataset = require('./dataset.json');

/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
var hundredThousandairs = dataset.bankBalances.filter(function(bank) {
  return parseInt(bank.amount) > 100000;
});

/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/
var roundedDollar = dataset.bankBalances.map(function(account) {
  return {
    'amount' : account.amount,
    'state' : account.state,
    'rounded' : Math.round(Number(account.amount))
  };
});

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/
var roundedDime = dataset.bankBalances.map(function(c, i, a) {
  return {
    'amount' : Math.floor(c.amount * 10) / 10,
    'state' : c.state
  };
});

//weird rounding explained (1/3 + 1/3 + 1/3 === .33333 + .333333 + .33333 = .999999999 which is not 1, as expected )
//
var sumOfBankBalances = dataset.bankBalances.reduce(function(p, c, i, a) {
  return p + parseFloat(c.amount); //weird rounding here
}, 0)

//round it after the fact to make it pass
sumOfBankBalances = Math.floor( sumOfBankBalances * 100 ) / 100;

/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var sumOfInterests = dataset.bankBalances.filter((el, i, a) => {
  return [ 'WI', 'IL', 'WY', 'OH', 'GA', 'DE'].indexOf(el.state) >= 0;
})
.map((el, i, a) => {
  return Math.round(parseFloat(el.amount) * 18.9) / 100;
})
.reduce((p, c) => {
  return p + c;
}, 0)

sumOfInterests = Math.round(sumOfInterests * 100) / 100;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = dataset.bankBalances
  .reduce(function (previousAccount, currentAccount) {

    // if state key does not exist, create it, and set the first amount to 0
    if( !previousAccount.hasOwnProperty(currentAccount.state) ){
      previousAccount[ currentAccount.state ] = 0;
    }

    // by this point, the key exists and is a Number
    previousAccount[ currentAccount.state ] += parseFloat( currentAccount.amount );

    // round down to cents
    previousAccount[ currentAccount.state ] = Math.round( previousAccount[ currentAccount.state ] * 100 )/100;

    return previousAccount;
  },{});

/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
  */

var sumOfHighInterests = Object.keys(stateSums)

  // only accounts in states that are not in the ones listed
  .filter(function (state) {
    return ['WI','IL','WY','OH','GA','DE'].indexOf( state ) === -1;
  })

  // convert amounts to only the interest
  .map(function (stateKey) {
    return {
      state : stateKey,
      interest : Math.round( stateSums[stateKey] * 0.189 * 100) / 100
    };
  })

  // return array of objects
  //  ex: [ {state:'HI', interest:1234}, ...]

  // only use interest amounts greater than 50,000
  .filter(function ( account ) {
    return account.interest > 50000;
  })

  // add all state interests, return rounded to cent
  .reduce(function ( previousInterest, currentAccount ) {
    return previousInterest + currentAccount.interest;
  }, 0);

sumOfHighInterests = Math.round( sumOfHighInterests * 100) / 100;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
 */
 var lowerSumStates = Object.keys(stateSums).filter( state => {
   if(stateSums[state] < 1000000) {
     return state;
   }
 })

 /*
   set higherStateSums to be the sum of
     all amounts of every state
     where the sum of amounts in the state is
       greater than 1,000,000
  */
 var higherStateSums = Object.keys(stateSums).reduce( (prev, curr) => {
   if(stateSums[curr] > 1000000) {
     prev += stateSums[curr];
   }
   return prev
 }, 0);

 /*
   set areStatesInHigherStateSum to be true if
     all of these states have a sum of account values
       greater than 2,550,000
     Wisconsin
     Illinois
     Wyoming
     Ohio
     Georgia
     Delaware
   false otherwise
  */
 var areStatesInHigherStateSum = Object.keys(stateSums).filter( state => {
   return stateSums[state] > 2550000;
 }).map( state => {
   switch(state) {
     case 'WI':
     case 'IL':
     case 'WY':
     case 'OH':
     case 'GA':
     case 'DE':
     return true;
     default:
     return false;
   }
 }).every( bool => {
   return bool === true;
 })


 /*
   Stretch Goal && Final Boss
   set anyStatesInHigherStateSum to be true if
     any of these states have a sum of account values
       greater than 2,550,000
     Wisconsin
     Illinois
     Wyoming
     Ohio
     Georgia
     Delaware
   false otherwise
  */
 var anyStatesInHigherStateSum = Object.keys(stateSums).filter( state => {
   return stateSums[state] > 2550000;
 }).map( state => {
   switch(state) {
     case 'WI':
     case 'IL':
     case 'WY':
     case 'OH':
     case 'GA':
     case 'DE':
     return true;
     default:
     return false;
   }
 }).some( bool => {
   return bool === true;
 })

module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};