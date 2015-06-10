'use strict';
var _= require('../array/lodash.js');

function map_to_even(collection){
  /*
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    array.push(collection[i]*2);
  }
  return array;
  */
  return_.map(collection,function(number){
    return number * 2;
  });

}
module.exports = map_to_even;
