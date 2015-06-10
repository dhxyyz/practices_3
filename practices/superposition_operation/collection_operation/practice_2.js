'use strict';
var _ = require('../../array/lodash')
function hybrid_operation_to_uneven(collection) {
/*
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===1) {
      array.push(collection[i]*3+2);
    }
  }
  return array;
  */
  var array = _.filter_in(collection,function(num){
    return num%2===1;
  });
  return _.map(array,function(num){
    return num=num*3+2;
  });
}

module.exports = hybrid_operation_to_uneven;
