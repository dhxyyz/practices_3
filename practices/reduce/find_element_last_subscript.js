'use strict';
var _ = require('../array/lodash');
function calculate_elements_sum(collection, element) {
  var number = 0;
  _.each(collection,function(num,i){
    if (element===num) {
      number = i;
    }
  });
  return number;
  /*
  var index;
  for (var i = 0; i < collection.length; i++) {
    if (element===collection[i]) {
      index = i;
    }
  }
  return index;
  */
}

module.exports = calculate_elements_sum;
