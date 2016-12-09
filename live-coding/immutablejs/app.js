const Immutable = require('immutable');

const data = Immutable.Map({
  people: Immutable.List(['Joe', 'Ray', 'Nigel']),
  test: 'Hello World'
})

const data2 = data.updateIn(['people'], ((people) => {
  return people.set(0, 'Russel');
}));

console.log('data2: ', data2);

// Copy an array Vanilla JS
var old = ["Apples", "Bananas"];
var newArr = old.slice(0);
console.log('newArr: ', newArr);

//or
var newArr2 = [...old];
console.log('newArr2: ', newArr2);

// Copy an object in vanilla JS
let oldObj = {
  name: 'Joe',
  favColor: 'Green',
}

var newObj = Object.assign({}, oldObj);
console.log('newObj: ', newObj);