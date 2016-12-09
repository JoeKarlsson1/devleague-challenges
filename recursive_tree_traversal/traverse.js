
/*global require, module,  __dirname */
/*jslint node: true */

'use strict';

function Traverse(data) {
  this.tree = data.root;
}

/**
 *
 * Process is called with every property and it's value
 * @param  {[string]} key       [description]
 * @param  {[string]} value     [description]
 * @param  {[string]} keyValue  [description]
 * @param  {[string]} keyValue2 [description]
 * @param  {[string]} arr       [description]
 * @return {[string]}           [description]
 */
function process(key,value,keyValue, keyValue2, arr) {

  if (keyValue2 == null) {
    //If the key is equal to Name
    if (key == keyValue) {
      //Push the value to the names array
      arr.push(value);
    }
  } else if (keyValue2 !== null) {
    if (key === keyValue2) {
      if (value == true) {
        key = keyValue

        //Push the value to the names array
        arr.push(value);
      }
    }
  } else {
    return 'ERROR'
  }
}

//Recursive traverse function
function traverse(o, func, keyValue, keyValue2, arr) {

  //For all elements in data tree
  for (var i in o) {

    //Apply this context to the Process function above
    func.apply(this, [i, o[i], keyValue, keyValue2, arr]);

    //If the object is not null and of type Object continue traversing the tree
    if (o[i] !== null && typeof (o[i]) == 'object') {

      //going on step down in the object tree!!
      traverse(o[i], func, keyValue, keyValue2, arr);
    }
  }


var names = [];

Traverse.prototype.getAllNames = function () {

  //Calls in the current tree context
  var data = this.tree;

  //that's all!!! ;)
  traverse(data, process, 'name', null, names);

  //Return an array of strings that contain the names
  return names;
}

var ages = [];

/**
 * getAllAges returns an Array with all of the values of the Age property for each and every node. e.g. [9, 8, 7, 6]
 * @return {[Array]}
 */
Traverse.prototype.getAllAges = function () {
  //Calls in the current tree context
  var data = this.tree;

  //that's all!!! ;)
  traverse(data, process, 'age', null, ages);

  //Return an array of strings that contain the names
  return ages;
}

var leafNames = [];
/**
 * getLeafNames returns an Array with only the values of the Name property from nodes that are leafs. A leaf node is an object with no children nodes.
 * @return {[Array]}
 */
Traverse.prototype.getLeafNames = function () {
  //Calls in the current tree context
  var data = this.tree;

  //that's all!!! ;)
  traverse(data, process, 'age', 'is_leaf', leafNames);

  //Return an array of strings that contain the names
  return leafNames;
}

console.log(leafNames);

Traverse.prototype.getLeafAges = function () {

}

Traverse.prototype.findAllParentsNames = function () {

}

Traverse.prototype.findAllParentsAges = function () {

}

Traverse.prototype.findAllParentsAges = function () {

}

Traverse.prototype.findName = function (name) {

}

Traverse.prototype.findAge = function (name) {

}

/* exports the Class Traverse */
module.exports = Traverse;