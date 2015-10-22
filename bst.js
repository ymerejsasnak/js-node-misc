'use strict';


function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.show = function() {
    process.stdout.write(this.data.toString() + ' ');
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
    if (typeof node === 'undefined') node = this.root;
    if (node !== null) {
        this.inOrder(node.left);
        node.show();
        this.inOrder(node.right);
    }
}

BST.prototype.preOrder = function(node) {
    if (typeof node === 'undefined') node = this.root;
    if (node !== null) {
        node.show();
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}

BST.prototype.postOrder = function(node) {
    if (typeof node === 'undefined') node = this.root;
    if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        node.show();
    }
}




BST.prototype.makeRandom = function(size) {
    for (let i = 0; i < size; i++) {
        this.insert(Math.floor(Math.random() * 1000));
    }
}



module.exports = BST;