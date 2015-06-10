'use strict';
var _ = require('../array/lodash');
var number_map_to_word_over_26 = function(collection){
  /*
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    var quotient,remainder;
    quotient = parseInt(collection[i]/26);
    remainder = collection[i]%26;
    if (remainder===0) {
      quotient = quotient-1;
      remainder = 26;
    }
    if (quotient===0) {
      array.push(String.fromCharCode(remainder+96));
    }else {
      array.push(String.fromCharCode(quotient+96) + String.fromCharCode(remainder+96));
    }
  }
  return array;
  */
  return _.map(collection,function(num){
    var quotient,remainder;
    quotient = parseInt(num/26);
    remainder = num%26;
    if (remainder===0) {
      quotient = quotient-1;
      remainder = 26;
    }
    if (quotient===0) {
      return String.fromCharCode(remainder+96);
    }else {
      return String.fromCharCode(quotient+96) + String.fromCharCode(remainder+96);
    }
  });
};

module.exports = number_map_to_word_over_26;
