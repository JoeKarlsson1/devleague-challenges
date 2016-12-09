var chai = require('chai');
chai.should();

var sample0 = "simple string";
var sample1 = 234.5;
var sample2 = ["a string",345.6];
var sample3 = [ ["a","b","c"], [2,3,4] ];
var sample4 = { prop1 : "val1" };
var sample5 = { prop1 : "val1", prop2 : 234.5 };
var sample6 = { prop1 : [ "val1", "val2" ] };
var sample7 = { prop1 : [ 2, 3, 4 ], prop2 : [ ["a","b","c"], [ 5, 6, 7 ] ] };
var sample8 = [ { prop1 : "val1" }, { prop1 : "val2" } ];
var sample9 = [ { prop1 : [ ["inner array 0"], ["inner array 1"] ], prop2 : { "inner prop 0" : "val 1" } }, "second element", 3 ];
var samples = [
  sample0,
  sample1,
  sample2,
  sample3,
  sample4,
  sample5,
  sample6,
  sample7,
  sample8,
  sample9
];
var Serializer = require('../serializer');

describe('Serializer', function(){

  describe('encode', function(){
    samples.forEach(function(sample,i){
      it('should encode sample'+i, function(){
        var result = Serializer.encode(sample);
        result.should.be.a('string');
      });
    });
  });

  describe('decode', function(){

    var encoded = [];
      samples.forEach(function(sample,i){
        var result = Serializer.encode(sample);
        encoded.push(result);
      });


    encoded.forEach(function(result,i){
      it('should decode sample'+i, function(){
        Serializer.decode(result).should.be.equal(samples[i]);
      });
    });
  });

});
