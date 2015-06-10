'use strict';
var _= require('../array/lodash.js');
function choose_even(collection) {

  return _.filter_in(collection, function(n) {
    return n % 2 === 0;
  });

}

module.exports = choose_even;
