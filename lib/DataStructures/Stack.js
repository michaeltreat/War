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
        this.length = 0;
    };

    add(node){
        let cn = new Node(node)
        if(!this.head){
            this.head = cn;
            cn.next = null;
            this.length++
            return;
        }
        cn.next = this.head;
        this.head = cn;
        this.length++

    }

    pop(){
        if(!this.head){
            return null;
        }
        let temp = this.head
        this.head = this.head.next;
        this.length--
        return temp.data;
    }
}

module.exports = Stack;


