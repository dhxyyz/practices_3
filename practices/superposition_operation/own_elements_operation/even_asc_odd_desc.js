'use strict';
var _ = require('../../array/lodash');
var even_asc_odd_desc = function(collection){
  var array = [];
  _.rank(collection,1);
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
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]%2===0) {
      array.push(collection[i]);
    }
  }
  for ( i = collection.length-1; i >= 0; i--) {
    if (collection[i]%2!==0) {
      array.push(collection[i]);
    }
  }
  return array;
};
module.exports = even_asc_odd_desc;
