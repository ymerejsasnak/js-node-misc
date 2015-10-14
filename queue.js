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
    if (this.queue === []) return undefined;

    return this.queue.shift();
} 






module.exports = Queue;