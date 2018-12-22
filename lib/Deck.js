'use strict';

const Stack = require('./DataStructures/Stack');
const Card = require('./Card');

const _suits = ['H','D','S','C'];
class Deck {
    constructor(jokers = false){
        this.deck = new Stack();
        
        _suits.forEach( suit => {
            let rank = 1;
            while(rank < 14){
                let card = new Card(suit, rank++)
                this.deck.add(card)
            }
        })
        if(jokers){
            this.deck.add(new Card('J', 14))
            this.deck.add(new Card('J', 15))
        }
    }

    shuffle(){
        
    }
}

module.exports = Deck;

let d1 = new Deck(true);

console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
