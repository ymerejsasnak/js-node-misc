'use strict';


function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.show = function(node) {
    return this.data;
}


function BST() {
    this.root = null;
}

BST.prototype.insert = function(data) {
    let node = new Node(data);

    if (this.root === null) {
        this.root = node;
    }
    else {
        let current = this.root, parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = node;
                    break;
                }

            }
            else {
                current = current.right;
                if (current === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

BST.prototype.inOrder = function(node) {
    if (node !== null) {
        this.inOrder(node.left);
        console.log(node.show() + ' ');
        this.inOrder(node.right);
    }
}




module.exports = BST;