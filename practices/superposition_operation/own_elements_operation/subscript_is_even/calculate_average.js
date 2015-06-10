'use strict';
var _ = require('../../../array/lodash');
var calculate_average = function(collection){
  var array = _.filter_in(collection,function(num,i){
    return i%2===1;
  });
  return _.mean(array);
  /*
  var number = 0;
  var k = 0;
  for (var i = 1; i < collection.length; i+=2) {
    number = number + collection[i];
    k++;
  }
  return number/k;
  */
};
module.exports = calculate_average;
