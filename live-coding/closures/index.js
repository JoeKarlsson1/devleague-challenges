var myObject = (function(){
  // Private
  var _name = "Jason";
  var _age = 23;

  function getAge(){
    return _age;
  };

  function setAge(newAge){
    if(typeof newAge !== 'number') {
      throw new Error('Wrong data type you dummy');
    }
    _age = newAge;
    return _age;
  };

  function sayAge() {
    console.log(this.getAge())
  }

  function getName(){
    return _name;
  };

  // Public
  return {
    getAge,
    setAge,
    sayAge,
    getName,
  };
})();

// We can access only exposed
// properties/members of an object
myObject.setAge(75); // 75
myObject.sayAge(); // 75

//does not change internal name
myObject.name = "Jon";

myObject.getName(); // "Jason"