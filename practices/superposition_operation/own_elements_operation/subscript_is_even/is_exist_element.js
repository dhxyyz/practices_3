'use strict';
var _ = require('../../../array/lodash');
var is_exist_element = function(collection,element){
  var judge = false;
  _.each(collection,function(num,i){
    if (i%2===0&&collection[i]===element) {
      judge = true;
    }
  });
  return judge;
  /*
  var judge = false;
  for (var i = 0; i < collection.length; i++) {
    if (i%2===0&&collection[i]===element) {
      judge = true;
    }
  }
  return judge;
  */
};
module.exports = is_exist_element;
