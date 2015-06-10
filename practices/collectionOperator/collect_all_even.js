'use strict';

function collect_all_even(collection) {

  var _= require('../array/lodash.js');
  return _.filter_in(collection, function(n) {
    return n % 2 === 0;
  });
//  var collection_a=[];
//  for (var i = 0; i < collection.length; i++) {
//    if (collection[i]%2===0) {
//      collection_a.push(collection[i]);
//    }
//  }
return collection_a;
}

module.exports = collect_all_even;
