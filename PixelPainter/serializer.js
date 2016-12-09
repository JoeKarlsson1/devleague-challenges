var sample0 = 'simple string';
var sample1 = 234.5;
var sample2 = ['a string',345.6];
var sample3 = [ ['a','b','c'], [2,3,4] ];
var sample4 = { prop1 : 'val1' };
var sample5 = { prop1 : 'val1', prop2 : 234.5 };
var sample6 = { prop1 : [ 'val1', 'val2' ] };
var sample7 = { prop1 : [ 2, 3, 4 ], prop2 : [ ['a','b','c'], [ 5, 6, 7 ] ] };
var sample8 = [ { prop1 : 'val1' }, { prop1 : 'val2' } ];
var sample9 = [ { prop1 : [ ['inner array 0'], ['inner array 1'] ], prop2 : { 'inner prop 0' : 'val 1' } }, 'second element', 3 ];

var Serializer = {
  encode : encode,
  decode : decode
};

function encode(obj) {
  var str = '';
  //check if obj is an object or an array
  if (obj !== 'object' && !Array.isArray(obj)) {
    var newArray = [];
    newArray[0] = obj;
    obj = newArray;
  }

  for (var p in obj) {

    if (obj.hasOwnProperty(p)) {
      var currentProperty = obj[p],
      encodedProperty;

      //If current object property is a string encode %s to the encoded string
      if (typeof currentProperty === 'string') {
        //console.log('string');
        encodedProperty = '%s' + currentProperty;

      }

      //If current object property is a number encode %n to the encoded string
      if (typeof currentProperty === 'number') {
        encodedProperty = '%n' + currentProperty;
      }

      //If current object property is an object encode %o to the encoded string
      if (typeof currentProperty === 'object') {
        encodedProperty = '%o' + currentProperty;
      }

      //Need to figure this one out - type of does not handle arrays - this will need to be an recursive method to encode all nested arrays.
      if (Array.isArray(currentProperty)) {
        encodedProperty = '%a' + currentProperty;
      }

      //If current object property is undefined throw an error
      if (typeof currentProperty === 'undefined') {
        encodedProperty = 'error';

      }

      str += p + '::' + encodedProperty + '\n';
    }
  }
  return str;
}

function decode(serialized_string) {

}



module.exports = Serializer;

console.log(encode(sample0));
console.log(encode(sample1));
console.log(encode(sample2));
// console.log(Array.isArray(sample0));
// console.log(encode(sample3));
// console.log(encode(sample4));
// console.log(encode(sample5));
// console.log(encode(sample6));
// console.log(encode(sample7));
// console.log(encode(sample8));
// console.log(encode(sample9));
//console.log(encode([undefined]));
