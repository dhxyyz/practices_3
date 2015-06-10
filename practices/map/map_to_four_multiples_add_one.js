'use strict';
var _= require('../array/lodash.js');

var map_to_four_multiples_add_one = function(collection){
/*
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    array.push(collection[i]*4+1);
  }
  return array;
  */
  return _.map(collection,function(number){
    return number * 4 + 1;
  });
};

module.exports = map_to_four_multiples_add_one;
