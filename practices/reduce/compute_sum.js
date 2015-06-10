'use strict';
var _ =require('../array/lodash');
function calculate_elements_sum(collection) {
  return _.sum(collection);
  /*
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum = sum + collection[i];
  }
  return sum;
  */
}

module.exports = calculate_elements_sum;
