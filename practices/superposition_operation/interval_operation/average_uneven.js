'use strict';
var _ = require('../../array/lodash');
function average_uneven(collection) {
  /*
  var number = 0;
  var count = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===1) {
      number = number + collection[i];
      count ++;
    }
  }
  return number/count;
  */
  var array = _.filter_in(collection,function(num){
    return num%2===1;
  });
  return _.sum(array)/array.length;
}

module.exports = average_uneven;
