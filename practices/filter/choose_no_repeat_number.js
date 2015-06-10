'use strict';
var _= require('../array/lodash.js');
function choose_no_repeat_number(collection) {
  var array = [];
   _.each(collection,function(item,i){
     if (!_.exist(array,item)) {
       array.push(item);
     }
  });

  return array;
}

module.exports = choose_no_repeat_number;
