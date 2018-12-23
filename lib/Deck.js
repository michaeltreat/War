'use strict';

const Stack = require('./DataStructures/Stack');
const Card = require('./Card');

const _suits = ['H','D','S','C'];
class Deck {
    constructor(jokers = false, empty = false){
        this.deck = new Stack();
        if(empty) return;

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
        let holdingArray = [];
        
        //Unload Stack into array
        let currentCard = this.deck.pop();
        while(currentCard){
            holdingArray.push(currentCard)
            currentCard = this.deck.pop();
        }
        // Start shuffling.
        let counter = 520;
        while(counter--){

            let numOne = Math.floor( (Math.random() * holdingArray.length) )
            let numTwo = Math.floor( (Math.random() * holdingArray.length) )
            while(numOne === numTwo){
                numTwo = Math.floor( (Math.random() * holdingArray.length) )
            }

            let tempHolder = holdingArray[numOne]
            holdingArray[numOne] = holdingArray[numTwo]
            holdingArray[numTwo] = tempHolder;
        }
        // Reload Array into Stack.
        holdingArray.forEach( card => this.deck.add(card))
    } 

    clearDeck(){
        this.deck = new Stack();
    }

    splitDeck(){
        let halfDeckNumber = 0;

        //Possible that this.deck.length is 0, which means potentially doing 0/2, which would throw error.
        if(this.deck.length){
            halfDeckNumber = Math.floor(this.deck.length/2)
        }

        let newDeck = new Deck(false,true);
        while(halfDeckNumber--){
            newDeck.deck.add(this.deck.pop())
        }

        return newDeck;
    }
}

module.exports = Deck;

let d1 = new Deck();
d1.shuffle();

console.log(d1.deck.length)
let d2 = d1.splitDeck();


console.log(d2.deck.length, d1.deck.length)

console.log(d2.deck.pop())
console.log(d2.deck.pop())
console.log(d2.deck.pop())
console.log(d2.deck.pop())
console.log(d2.deck.pop())
console.log(d2.deck.pop())
console.log(d2.deck.pop())
