function median(array){
  var number = 0;
  var k;
  if ((array.length)%2===0) {
    k = (array.length)/2;
    number=(array[k]+array[k-1])/2;
  }else {
    k = (array.length-1)/2;
    number=array[k];
  }
  return number;
}

module.exports = median;
//中位数
