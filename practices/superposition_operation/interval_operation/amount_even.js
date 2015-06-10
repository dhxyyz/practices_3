'use strict';
var _ = require('../../array/lodash');
function amount_even(collection) {
  /*
  var number = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===0) {
      number = number + collection[i];
    }
  }
  return number;
  */
  var array = _.filter_in(collection,function(num){
    return num%2===0;
  });
  return _.sum(array);
}

module.exports = amount_even;
