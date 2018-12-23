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
}

module.exports = Deck;
