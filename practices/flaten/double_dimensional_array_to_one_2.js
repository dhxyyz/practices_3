'use strict';

function double_to_one(collection) {

  var array=[];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length===undefined) {
      array.push(collection[i]);

    }
    for (var j = 0; j < (collection[i]).length; j++) {
      if (collection[i][j].length===undefined) {
        array.push(collection[i][j]);
      }
    }
  }

  var decide = false;
  var collection_a = [];
  for ( i = 0; i < array.length; i++) {
    for (var x = 0; x < collection_a.length; x++) {
      if (array[i]===collection_a[x]) {
        decide = true;
      }
    }
    if (!decide) {
      collection_a.push(array[i]);
    }
    decide = false;
  }
  return collection_a;
}

module.exports = double_to_one;
