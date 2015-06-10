'use strict';
var _ = require ('../array/lodash');
var number_map_to_word = function(collection){
  /*
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    array.push(String.fromCharCode(collection[i]+96));
  }
  return array;
  */
  return _.map(collection,function(num){
    return String.fromCharCode(num+96);
  });
};

module.exports = number_map_to_word;
