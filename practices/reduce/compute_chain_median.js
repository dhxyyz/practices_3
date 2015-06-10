'use strict';
var _ = require('../array/lodash');
function compute_chain_median(collection) {
  var array = [];
  array = collection.split('->');
  for (var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
   _.rank(array);
   return _.median(array);
  /*
  var number;
  for (i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      if (array[i]>array[j]) {
        number=array[i];
        array[i]=array[j];
        array[j]=number;
      }
    }
  }

  var median;
  var k;
  if ((array.length)%2===0) {
    k = (array.length)/2;
    median=(array[k]+array[k-1])/2;
  }else {
    k = (array.length-1)/2;
    median=array[k];
  }
  return median;
  */
}

module.exports = compute_chain_median;

function median(){

}
