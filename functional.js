//making my own simple versions of functional methods

//foreach, filter, map, reduce, some, every...any others?

function myForEach(array, fn) {
    let len = array.length;
    for (i = 0; i < len; i++) {
        fn(array[i]);
    }


}














module.exports = {myForEach}