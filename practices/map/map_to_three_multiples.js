'use strict';
var _ = require('../array/lodash.js');

var map_to_three_multiples = function(collections){
  /*
  var array = [];
  for (var i = 0; i < collections.length; i++) {
    array.push(collections[i]*3);
  }
  return array;
  */
  return _.map(collections,function(number){
    return number * 3;
  });
};

module.exports = map_to_three_multiples;
