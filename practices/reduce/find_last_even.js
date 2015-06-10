'use strict';
var _ = require('../array/lodash');
function find_last_even(collection) {
  var number;
  _.each(collection,function(num){
    if (num%2===0) {
      number = num;
    }
  });
  return number;
  /*
  var number;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===0) {
      number = collection[i];
    }
  }
  return number;
  */
}

module.exports = find_last_even;
