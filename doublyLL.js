//doubly linked list (also with slightly diff implementation from LL)

function Node(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
}

function DoublyLinkedList() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.previous = this.head;
}

DoublyLinkedList.prototype.append = function(data) {
    var beforeNode = this.tail.previous;
    var newNode = new Node(data);

    newNode.next = this.tail;
    newNode.previous = beforeNode;

    beforeNode.next = newNode;
    this.tail.previous = newNode;
}

DoublyLinkedList.prototype.prepend = function(data) {
    var afterNode = this.head.next;
    var newNode = new Node(data);

    newNode.next = afterNode;
    newNode.previous = this.head;

    afterNode.previous = newNode;
    this.head.next = newNode;
}


// functions: move to next, move to previous, get current node/data....others... 


DoublyLinkedList.prototype.toString = function() {
    var list = '';
    var currentNode = this.head.next;
    while (currentNode.data) {
        list += ' ' + currentNode.data;
        currentNode = currentNode.next;
    }
    return list.trim();
}




module.exports = DoublyLinkedList;