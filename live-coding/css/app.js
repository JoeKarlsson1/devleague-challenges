var domElements = document.body.querySelectorAll('li');

for (var i = domElements.length - 1; i >= 0; i--) {
  console.log(domElements[i].innerHTML)
};

// let elm = document.querySelector('.listItem');

// console.log(elm.nextSibling);

let ray = document.querySelector('.listItem:nth-child(2)');

console.log(ray)