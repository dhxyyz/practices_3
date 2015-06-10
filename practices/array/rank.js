function rank(collection,judge){
  var array;
  for (var i = 0; i < collection.length; i++) {
    for (var y = i+1; y < collection.length; y++) {
      if (judge?collection[i]>collection[y]:collection[i]<collection[y]) {
        array=collection[i];
        collection[i]=collection[y];
        collection[y]=array;
      }
    }
  }
  return collection;
}
module.exports = rank;
//冒泡排序
