'use strict';
var _= require('../array/lodash.js');
function choose_common_elements(collection_a, collection_b) {
  var array = [];
  _.each(collection_a,function(item,i){
    if (_.exist(collection_b,item)) {
      array.push(item);
    }
  });

  return array;
}

module.exports = choose_common_elements;
