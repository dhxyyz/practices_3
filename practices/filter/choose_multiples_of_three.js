'use strict';
var _= require('../array/lodash.js');
function choose_multiples_of_three(collection) {
  return _.filter_in(collection, function(n) {
    return n % 3 === 0;
  });
}

module.exports = choose_multiples_of_three;
