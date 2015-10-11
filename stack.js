'use strict'

function Stack() {
    this.stack = [];
    this.index = -1;
}

Stack.prototype.push = function(value) {
    value = value || null;
    this.index++;
    this.stack[this.index] = value;
    return value;
};

Stack.prototype.pop = function() {
    if (this.index === -1) return undefined;
    let value = this.stack[this.index];
    this.stack.splice(this.index);
    this.index--;
    return value;
}

Stack.prototype.peek = function() {
    return this.stack[this.index];
}

Stack.prototype.isEmpty = function() {
    return this.index === -1;
}

Stack.prototype.empty = function() {
    this.stack = [];
    this.index = -1;
    return true;
}

module.exports = Stack;