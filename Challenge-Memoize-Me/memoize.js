/* select module utilizes a memoize technique to
*  more efficiently query the dom for elements
*  @param for select is a string similar to querySelector
*/
const select = (function() {

  //object to hold objects at key 'element'
  let memory = {};

  /*takes in string 'element', if it exists, return
  * the value stored in that key, if not
  * query the dom for that 'element' and add its value
  * at the key 'element'
  */
  const memoize = (element) => {
    if (element in memory) {
      console.log('Cache hit');
      return memory[element];
    }
    console.log('Cache miss');
    memory[element] = document.querySelector(element);
    return memory[element];
  }

  //returns entire memory object
  const show = () => {
    return memory;
  }

  //clears cache
  const clear = () => {
    memory = {};
  }

  //module pattern for select
  return {
    get : memoize,
    show : show,
    clear : clear
  };
})();

//example use
let myContainer = select.get('#mainContainer'); //miss
myContainer = select.get('#mainContainer'); //hit
const myContaine2r = select.get('#mainContainer2'); //miss
// returns object with #mainContainer ID
console.log(select.show());
// returns object with key '#mainContainer' and value of the dom object
// select.clear();
// sets memory object to {}