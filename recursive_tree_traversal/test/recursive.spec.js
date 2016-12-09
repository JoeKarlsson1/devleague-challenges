var chai = require('chai');
var expect = chai.expect;
var tree = require('../tree');
var Traverse = require('../traverse');

var traverse = new Traverse(tree);

describe('Validation', function(){
  describe('Traversal Object', function () {

    it('should be an instance of itself', function () {
      expect(traverse).to.be.an.instanceOf(Traverse);
    });

    it('should take a data structure and set it as a property on itself', function () {
      expect(traverse.tree).to.not.be.undefined;
      expect(traverse.tree).to.be.an('object');
    });
  }); // ends traversal object describe
}); // ends validation describe

describe('Traversing a Tree', function () {
  describe('Methods should exist', function () {
    var methodList = [
      'getAllNames',
      'getAllAges',
      'getLeafNames',
      'getLeafAges',
      'findAllParentsNames',
      'findAllParentsAges',
      'findName',
      'findAge'
    ];

    for (var i = 0; i < methodList.length; i++) {
      checkMethodExistance(traverse, methodList[i]);
    }

  });// ends methods exists describe

  describe('Method getAllNames', function () {
    var results = traverse.getAllNames();

    it('should return an array of strings', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsStrings);
    });

    it('should be an array of thirty-two names', function () {
      expect(results).to.have.length(32);
    });

    it('should have all the names!', function () {
      expect(results).to.include.members(['Nikola Tesla', 'Kingtak', 'Eylem', 'Douglas Crockford', 'Jayson']);
    });
  }); // ends method getAllNames describe

  describe('Method getAllAges', function () {
    var results = traverse.getAllAges();

    it('should return an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should be an array of thirty-two numbers', function () {
      expect(results).to.have.length(32);
    });

    it('should have all the numbers!', function () {
      expect(results).to.include.members([66, 22, 88, 1337, 500]);
    });
  });

  describe('Method getLeafNames', function () {
    var results = traverse.getLeafNames();

    var sixteen_names = [
      'Spencer Toyama',
      'Edgar Allan Poe',
      'Albert Einstein',
      'Nikola Tesla',
      'Garfield The Cat',
      'Milton S. Hershey',
      'Gene Shoemaker',
      'Neil deGrasse Tyson',
      'Carl Sagan',
      'Marty McFly',
      'Bill Nye',
      'Ann Druyan',
      'Jon Stewart',
      'Aaron Turner',
      'Douglas Crockford',
      'Victor Von Doom'
    ];

    it('should return an array of strings', function () {
        expect(results).to.be.an('array');
        expect(results).to.satisfy(containsStrings);
    });

    it('should be an array of sixteen string values', function () {
      expect(results).to.have.length(16);
    });

    it('should contains all the names!', function () {
      expect(results).to.include.members(sixteen_names);
    });
    
  }); //ends getLeafName describe

  describe('Method getLeafAges', function () {
    var results = traverse.getLeafAges();

    it('should be an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should be an array of sixteen values', function () {
      expect(results).to.have.length(16);
    });

    it('should contain certain numbers', function () {
      var sixteen_ages = [28, 560, 91, 16, 783, 8008, 62, 65, 23, 43, 13, 914, 841, 33, 88, 500 ];
      expect(results).to.have.members(sixteen_ages);
    });
  }); // ends getLeafAges describe

  describe('Method findAllParentsNames', function () {
    var results = traverse.findAllParentsNames();

    it('should be an array of strings', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsStrings);
    });

    it('should not include leaf names', function () {
      var leafNames = traverse.getLeafNames();
      var result = traverse.findAllParentsNames();

      expect(results).to.not.include.members(leafNames);
    });

    it('should contain some of these names', function () {
      var someParentNames = ['Stevie', 'Mark', 'Charles', 'Cortney', 'Wray', 'Kingtak', 'Bjorn'];
      
      expect(results).to.include.members(someParentNames);
    });
  }); // ends findAllParentsNames describe

  describe('Method findAllParentsAges', function () {
    var results = traverse.findAllParentsAges();

    it('should be an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should not include leaf ages', function () {
      var leafAges = traverse.getLeafAges();
      var result = traverse.findAllParentsAges();

      expect(results).to.not.include.members(leafAges);
    });

    it('should contain some of these ages', function () {
      var someParentAges = [28, 22, 65, 302, 1337, 36, 243, 32, 24, 87, 0, 100, 817, 910, 66, 22];

      expect(results).to.include.members(someParentAges);
    });
    
  });

  describe('Method findName', function () {
    var person = traverse.findName('Nikola Tesla');

    it('should find Nikola Tesla', function () {
      expect(person).to.be.an('object');
      expect(person).to.have.deep.property('name', 'Nikola Tesla');
      expect(person).to.have.deep.property('age', 16);
      expect(person).to.have.deep.property('has_parent', true);
      expect(person).to.have.deep.property('is_leaf', true);
      expect(person.children).to.be.empty;
    });
  }); //ends findName describe




}); // ends traversing describe


/* **************** *
 * helper functions *
 * **************** */

// check each method by it's name
function checkMethodExistance(tree, methodName){
  it(methodName + ' should be defined and be a Function', function () {
    expect(tree[methodName]).to.not.be.undefined;
    expect(tree[methodName]).to.a.instanceOf(Function);
  });
}

// used to the satisfy(cheezburger);
function containsStrings(array) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      return false;
    }
  }
  return true;
}

function containsNumbers(array) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      return false;
    }
  }
  return true;
}