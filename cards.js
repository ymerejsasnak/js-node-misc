//object for playing cards

'use strict';


function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

function Deck() {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    this.deck = [];
    let self = this;

    suits.forEach(function(suit) {
        values.forEach(function(value) {
            self.deck.push(new Card(value, suit));
        });
    });
}

Deck.prototype.showAll = function() {
    this.deck.forEach(function(card) {
        console.log(card.value + ' of ' + card.suit);
    });
}

//using fisher yates
Deck.prototype.shuffle = function() {
    let cardsLeft = this.deck.length, index, temp;

    while(cardsLeft) {
        index = Math.floor(Math.random() * cardsLeft--);

        temp = this.deck[cardsLeft];
        this.deck[cardsLeft] = this.deck[index];
        this.deck[index] = temp;
    }
}

Deck.prototype.count = function() {
    return this.deck.length;
}

Deck.prototype.drawFromTop = function() {
    // we will consider the END of the array to be the top
    return this.deck.pop();
}

Deck.prototype.drawFromMiddle = function() {
    // allow about half the deck to be considered the middle
    let middle = Math.floor(Math.random() * this.deck.length / 2 + this.deck.length / 4)
    return this.deck.splice(middle, 1)[0];

}

//cut deck, discard x cards, deal hands, other ideas?




module.exports = Deck;

