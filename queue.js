'use strict';

function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function() {
    let len = arguments.length;

    if (len === 0) return;

    for (let i = 0; i < len; i++) {
        this.queue.push(arguments[i]);
    }

}


Queue.prototype.dequeue = function() {
    return this.queue.shift();
} 






function Deque() {
    this.deque = [];
}

Deque.prototype.addFront = function(value) {
    this.deque.unshift(value);
}

Deque.prototype.addBack = function(value) {
    this.deque.push(value);
}

Deque.prototype.removeFront = function() {
    return this.deque.shift();
}

Deque.prototype.removeBack = function() {
    return this.deque.pop();
}

Deque.prototype.length = function() {
    return this.deque.length;
}

Deque.prototype.front = function() {
    return this.deque[0];
}

Deque.prototype.back = function() {
    return this.deque[this.length() - 1];
}









module.exports = {Queue, Deque};