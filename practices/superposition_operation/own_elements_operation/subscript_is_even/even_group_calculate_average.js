'use strict';
var _ = require('../../../array/lodash');
var even_group_calculate_average = function(collection){
  var array = [];
  var func = {};
  var array_a = [];
  array = _.filter_in(collection,function(coll,i){
    return i%2===1&&coll%2===0;
  });

//  for (var i = 0; i < collection.length; i++) {
//      if (i % 2 === 1 && collection[i] % 2 === 0) {
//          array.push(collection[i]);
//      }
//  }

  for (var i = 0; i < array.length; i++) {
      func[array[i].toString().length] = func[array[i].toString().length] || [];
      func[array[i].toString().length].push(array[i]);
  }

  for (var key in func){
    array_a.push(_.mean(func[key]));
  }
  return array_a.length===0?[0]:array_a;

};
module.exports = even_group_calculate_average;
