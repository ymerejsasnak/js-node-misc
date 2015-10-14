//naive implementation of set data type

'use strict';

function Set() {
    this.set = [];
}

Set.prototype.add = function(...args) {
    args.forEach(function(value) {
        if (this.set.indexOf(value) === -1) {
            this.set.push(value);
        }
    }, this);
    return this.set;
}

Set.prototype.remove = function(...args) {
    args.forEach(function(value) {
        let index = this.set.indexOf(value)
        if (index > -1) {
            this.set.splice(index, 1);
        }
    }, this);
    return this.set;
}


Set.prototype.union = function(other) {
    let set3 = new Set;
    set3.set = this.set.concat();
    other.set.forEach(function(value) {
        set3.add(value);
    });
    return set3;
}

Set.prototype.intersection = function(other) {

}

//complement = function(other) {


//product = function(other) {















module.exports = Set;