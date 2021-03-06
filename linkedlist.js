'use strict';

function Node(data) {
    this.data = data;
    this.next = null;
}

//empty list with new List() or pass it arguments to build a list immediately
function List() {
    this.head = null;
    if (arguments) {
        for (var i = 0, len = arguments.length; i < len; i++) {
            this.append(arguments[i]);
        }
    }
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

List.prototype.insert = function(index, data) {

}

List.prototype.getNth = function(index) {
    if (index < 0) return undefined;
    let current = 0, node = this.head;

    while (current !== index) {
        if (node.next === null) return undefined;
        node = node.next;
        current++;
    }
    return node.data;

}

List.prototype.indexOf = function(data) {
    let index = 0, node = this.head;

    while (node) {
        if (node.data === data) return index;
        node = node.next;
        index++;
    }
    return -1;
}

List.prototype.lastIndexOf = function(data) {
    let current = 0, result = -1, node = this.head;

    while (node) {
        if (node.data === data) result = current;
        node = node.next;
        current++;
    }
    return result;
}

List.prototype.everyIndexOf = function(data) {
    let current = 0, result = [], node = this.head;

    while (node) {
        if (node.data === data) result.push(current);
        node = node.next;
        current++;
    }
    return result;
}

List.prototype.removeByIndex = function(index) {
    if (index < 0) throw new Error('out of range');
    if (index === 0) return this.head = this.head.next;

    let current = 0, currentNode = this.head, previousNode = null;

    while (current < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        current++;
        if (currentNode === null) throw new Error('out of range');
    }
    previousNode.next = currentNode.next;
}

List.prototype.removeFirstByValue = function(data) {

}

List.prototype.removeLastByValue = function(data) {

}

List.prototype.removeAllByValue = function(data) {

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


//just a little helper to build a randomized list to work with
List.prototype.quickBuild = function(length) {
    for (let i = 0; i < length; i++) {
        this.append(Math.floor(Math.random() * 100));
    }
}



module.exports = List;