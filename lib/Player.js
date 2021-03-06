'use strict';

const Stack = require("./DataStructures/Stack");

class Player {
    constructor(name){
        this.name = name;
        this.deck = new Stack();
        this.hand = new Stack();
        this.discard = new Stack();
        this.playArea = [];
    }

    addToDeck(card){
        this.deck.add(card);
        return;
    }

    removeFromDeck(){
        let card = this.deck.pop();
        return card;
    }
}

module.exports = Player