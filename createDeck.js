/*
*
*    Blackjack App
*    by, Mudathir Lawal
*    15th August, 2019
*
*/

const values = [ 
               "Ace", "King", "Queen", "Jack", "Ten",
               "Nine", "Eight", "Seven", "Six", "Five",
               "Four", "Three", "Two"
];

const suits = [ 'Hearts', 'Clubs', 'Diamonds', 'Spades' ];

const createDeck = _ => {
	let deck = [];
	for ( let valueIdx = 0; valueIdx < values.length; valueIdx++ ) {
		for ( let suitIdx = 0; suitIdx < suits.length; suitIdx++ ) {
	        let card = {
	        	value: values[ valueIdx ],
	        	suit: suits[ suitIdx ]
	        };
	        deck.push( card );
	    }
    }
    return deck;
}

let deck = createDeck();

const getCardString = card => {
	return card.value + ' of ' + card.suit;
};

const shuffleDeck = () => {};

const printDeck = _ => {
	for ( let j = 0; j < deck.length; j++ ) {
		console.log( deck[ j ] );
	}
}

const getNextCard = _ => deck.shift();

let playerCards = [ getCardString( deck[0] ), getCardString( deck[2] ) ];

console.log( '\n' );
console.log( "Welcome to Blackjack!" );
console.log( "You are dealt:" );
console.log( "\t\t" + playerCards[ 0 ] );
console.log( "\t\t" + playerCards[ 1 ] );
console.log( '\n' ); 
 
printDeck();
console.log( deck );
