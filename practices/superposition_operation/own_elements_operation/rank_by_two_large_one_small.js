'use strict';
var _ = require('../../array/lodash');
function rank_by_two_large_one_small(collection){
  _.ranl(collection);
  var array = [];
/*
  var array = [];
  var number;
  for (var i = 0; i < collection.length; i++) {
    for (var j = i+1; j < collection.length; j++) {
      if (collection[i]>collection[j]) {
        number=collection[i];
        collection[i]=collection[j];
        collection[j]=number;
      }
    }
  }
*/
  var box = 0;
  for (var i = 0; i < collection.length; i++) {
    array.push(collection[i]);
    if (i%3===2) {
      box = array[i-2];
      array[i-2] = array[i-1];
      array[i-1] = array[i];
      array[i] = box;
    }
  }
  return array;
}
module.exports = rank_by_two_large_one_small;
