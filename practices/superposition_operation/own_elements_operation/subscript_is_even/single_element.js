'use strict';
var _ = require('../../../array/lodash');
var single_element = function(collection){
  var array = [];
  var array_a = [];
  array = _.filter_in(collection,function(num,i){
    return i%2===1;
  });
  return rtdetr(array);
  /*
  for (var i = 0; i < collection.length; i++) {
    if (i%2===1) {
      array.push(collection[i]);
    }
  }
  for (i = 0; i < array.length; i++) {
    var judge = true;
    for (var j = 0; j < array.length; j++) {
      if (array[i]===array[j]&&i!==j) {
        judge = false;
        break;
      }
    }
    if (judge) {
      array_a.push(array[i]);
    }
  }
  return array_a;
  */
};
module.exports = single_element;

function rtdetr(collection){
  var array_a = [];
  for (var i = 0; i < collection.length; i++) {
    var judge = true;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i]===collection[j]&&i!==j) {
        judge = false;
        break;
      }
    }
    if (judge) {
      array_a.push(collection[i]);
    }
  }
  return array_a;
}
