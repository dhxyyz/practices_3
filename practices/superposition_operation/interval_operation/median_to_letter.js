'use strict';
var _ = require('../../array/lodash');
function median_to_letter(collection) {

  var array =_.rank(collection);
  var median = Math.ceil(_.median(array));

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
    if (median%1!==0) {
      median = parseInt(median) + 1;
    }
  }else {
    k = (collection.length-1)/2;
    median=collection[k];
  }
  */

  var quotient;
  var remainder;
  quotient = parseInt(median/26);
  remainder = median%26;
  if (remainder===0) {
    quotient = quotient-1;
    remainder = 26;
  }
  if (quotient===0) {
    return String.fromCharCode(remainder+96);
  }else {
    return (String.fromCharCode(quotient+96) + String.fromCharCode(remainder+96));
  }
}

module.exports = median_to_letter;
