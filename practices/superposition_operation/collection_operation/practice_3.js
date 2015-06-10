'use strict';
var _ = require('../../array/lodash');
function hybrid_operation_to_uneven(collection) {
  /*
  var number = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===1) {
      number = number + collection[i] * 3 + 5;
    }
  }
  return number;
  */
  var array = _.filter_in(collection,function(num){
    return num%2===1;
  });
  return _.sum(array)*3+array.length*5;
}

module.exports = hybrid_operation_to_uneven;
