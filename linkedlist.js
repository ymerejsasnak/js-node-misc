'use strict';

function Node(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this.head = null;
}

List.prototype.prepend = function(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
}

List.prototype.append = function(data) {
    if (this.head === null) {
        this.head = new Node(data);
        return;
    }
    
    let node = this.head;
    while (node.next) {
        node = node.next;
    }
    node.next = new Node(data);
}


List.prototype.toString = function() {
    let node = this.head;
    let string = '';
    while (node) {
        string += `${node.data}`;
        node = node.next;
        if (node) string += ' -> ';
    }
    return string;
}

module.exports = List;




//todo: append, insert, findNth, remove...any others?