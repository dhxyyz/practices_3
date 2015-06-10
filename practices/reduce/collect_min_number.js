'use strict';
var _ = require('../array/lodash');
function collect_min_number(collection) {
  /*
  var number;
  number = collection[1];
  for (var i = 0; i < collection.length; i++) {
    for (var j = i; j < collection.length; j++) {
      if (number>collection[j]) {
        number = collection[i];
      }
    }
  }
  return number;
  */
  return _.min(collection);

}

module.exports = collect_min_number;
