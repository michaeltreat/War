'use strict';


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
    };

    add(node){
        let cn = new Node(node)
        if(!this.head){
            this.head = cn;
            cn.next = null;
            return;
        }
        cn.next = this.head;
        this.head = cn;
    }

    pop(){
        if(!this.head){
            return null;
        }
        let temp = this.head
        this.head = this.head.next;
        return temp.data;
    }
}

module.exports = Stack;


