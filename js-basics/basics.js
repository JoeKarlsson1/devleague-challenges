/* Create a `myName` variable and assign it a String value */

var myName = 'Joe'

/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */

var person = {
  name : myName,
  age : 15,

  // Testing out internal functions - just for fun :D
  greet : function () {
    console.log('Hello, my name is ' + this.name);
  },
  canDrive : function () {
    if (this.age >= 16) {
      return true;
    }
    return false;
  }
};

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */

function greet(name) {
  console.log('Hello, my name is ' + name);
}

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */

var canDrive = false;

function personCanDrive() {
  if (this.age >= 16) {
    return canDrive = true;
  }
  return canDrive;
}

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

// strings
var name = 'Nicholas';

// numbers
var count = 25;

// boolean
var found = true;

// null
var nullType = null;

// undefined
var flag = undefined;

// object
var object = {
  type : 'Object 1'
}

var dataTypes = [name, count, found, nullType, flag, object]

/* Create a Dog object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */

var dog = {
  name : 'Spot',
  bark : function() {
    console.log('bark!')
  }
}

