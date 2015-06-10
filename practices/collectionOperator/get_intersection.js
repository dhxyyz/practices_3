'use strict';
var _= require('../array/lodash.js');
function get_intersection(collection_a, collection_b) {
  var collection = [];
  _.each(collection_b,function(item,i){
    if (_.exist(collection_a,item)) {
      collection[collection.length] = item;
    }
  });

  return collection;
}

module.exports = get_intersection;
