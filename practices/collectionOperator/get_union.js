'use strict';
var _= require('../array/lodash.js');
function get_union(collection_a, collection_b) {

  var collection = collection_a;
  _.each(collection_b,function(item,i){
    if (!_.exist(collection_a,item)) {
      collection[collection.length] = item;
    }
  });

  return collection;

}

module.exports = get_union;
