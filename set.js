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
    let resultSet = new Set;
    resultSet.set = this.set.concat();
    other.set.forEach(function(value) {
        resultSet.add(value);
    });
    return resultSet;
}

Set.prototype.intersection = function(other) {  
    let resultSet = new Set;
    this.set.forEach(function(value) {
        if (other.set.indexOf(value) > -1) {
            resultSet.add(value);
        }
    });
    return resultSet;
}

Set.prototype.subtract = function(other) {
    let resultSet = new Set;
    this.set.forEach(function(value) {
        if (other.set.indexOf(value) === -1) {
            resultSet.add(value);
        }
    });
    return resultSet;
}


//product = function(other) {















module.exports = Set;