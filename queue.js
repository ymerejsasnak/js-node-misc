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



//will use 1 - 10 as priority value 
// usually uses a heap, but I don't know how to do that yet, so I had an idea to do it this way (super naive and inefficient I guess)
function PriorityQueue() {
    this.queue = [[],[],[],[],[],[],[],[],[],[]];
}

PriorityQueue.prototype.enqueue = function(value, priority) {
    if (priority < 1 || priority > 10) return new Error ('priority out of range (1-10)');
    this.queue[10 - priority].push(value);
}

PriorityQueue.prototype.dequeue = function() {
    let value;    
    this.queue.forEach(function(array) {
        if (array.length !== 0 && value === undefined) {
            value = array.shift();
        }
    });
    return value;
}

PriorityQueue.prototype.toString = function() {
    return this.queue.reduce(function(a, b) {
        return a.concat(b);
    }).toString();
}








module.exports = {Queue, Deque, PriorityQueue};