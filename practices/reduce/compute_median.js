'use strict';
var _ = require('../array/lodash');
function compute_median(collection) {
  var array = collection;
  return _.median(_.rank(array));
  /*
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

  var median;
  var k;
  if ((collection.length)%2===0) {
    k = (collection.length)/2;
    median=(collection[k]+collection[k-1])/2;
  }else {
    k = (collection.length-1)/2;
    median=collection[k];
  }
  return median;
  */
}

module.exports = compute_median;
