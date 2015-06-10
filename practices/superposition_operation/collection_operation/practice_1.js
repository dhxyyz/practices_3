'use strict';
var _ = require('../../array/lodash');
function hybrid_operation(collection) {
  /*
  var number = 0;
  for (var i = 0; i < collection.length; i++) {
      number = number + collection[i]*3 + 2;
  }
  return number;
  */
  return _.sum(collection)*3 + collection.length*2;
}

module.exports = hybrid_operation;
