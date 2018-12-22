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
        let holdingArray = [];
        
        //Unload Stack into array
        let currentCard = this.deck.pop();
        while(currentCard){
            holdingArray.push(currentCard)
            currentCard = this.deck.pop();
        }

        let counter = 520;
        while(counter--){
            // Find two random numbers within the range of the deck's size
            let numOne = Math.floor( (Math.random() * holdingArray.length) )
            let numTwo = Math.floor( (Math.random() * holdingArray.length) )

            // Ensure they are different random numbers. No bias, must be random roll each time.
            while(numOne === numTwo){
                numTwo = Math.floor( (Math.random() * holdingArray.length) )
            }
            // console.log(numOne)
            // console.log(numTwo)
            
            // Hold the fist value.
            let tempHolder = holdingArray[numOne]
            console.log(tempHolder)

            // Reasign the first index with the value at the second one.
            holdingArray[numOne] = holdingArray[numTwo]

            // Reassign the second index with the value of first one.
            holdingArray[numTwo] = tempHolder;
        }
        
        // Reload back into a stack.
        holdingArray.forEach( card => this.deck.add(card))
    } 
}

module.exports = Deck;

let d1 = new Deck(true);
d1.shuffle();

// Should be random, not duplicating order.

console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
console.log(d1.deck.pop())
