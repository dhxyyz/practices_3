'use strict';

function average_to_letter(collection) {
  var unmber = 0;
  for (var i = 0; i < collection.length; i++) {
    unmber = unmber + collection[i];
  }
  if (unmber%(collection.length)===0) {
    unmber = unmber/(collection.length);
  }else {
    unmber = parseInt(unmber/(collection.length)) + 1;
  }
  return String.fromCharCode(unmber+96);
}

module.exports = average_to_letter;
