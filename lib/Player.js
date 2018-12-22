'use strict';

const Stack = require("./DataStructures/Stack");
const Card = require("./Card");

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

let p1 = new Player('Mike')

p1.addToDeck(new Card('H', 3))
p1.addToDeck(new Card('H', 13))
p1.addToDeck(new Card('D', 1))
p1.addToDeck(new Card('S', 6))

console.log(p1.removeFromDeck())
console.log(p1.removeFromDeck())
console.log(p1.removeFromDeck())
console.log(p1.removeFromDeck())
console.log(p1.removeFromDeck())