const myPerson = (function() {
  let module = {};

  //Private
  var _name = 'Joe';

  //Public
  module.favColor = 'Green';

  module.getName = function(){
    return _name;
  };

  module.setName= function(newName){
    if(typeof newName !== 'string'){
      throw new Error('Wrong data type you dummy')
    }
    _name = newName;
    return _name;
  }

  return module
})();

console.log(myPerson.setName("RAY"));