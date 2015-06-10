'use strict';
var _ = require('../../../array/lodash');
var calculate_median = function(collection){
  var array = _.filter_in(collection,function(num, i){
    return i%2===1;
  });
  return _.median(array);
  /*
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    if (i%2===1) {
      array.push(collection[i]);
    }
  }
  if (array.length%2===1) {
    return array[(array.length-1)/2];
  }else {
    return (array[array.length/2]+array[array.length/2-1])/2;
  }
  */
};
module.exports = calculate_median;
