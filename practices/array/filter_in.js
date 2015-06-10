var each = require('./each.js');

function filter_in(collection,func) {
    var result = [];
    each(collection,function (num,i) {
        if (func(num,i)) {
            result[result.length] = num;
        }
    });
    return result;
}

module.exports = filter_in;

/*
function get_even(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

var collection = [1,2,3,4,5,6,7,8,9];

console.log(filter_in(collection,get_even));
*/
