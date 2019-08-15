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
	for ( let j = 0; j < values.length; j++ ) {
		for ( let i = 0; i < suits.length; i++ ) {
	        deck.push( values[ j ] + ' of ' + suits[ i ] );
	    }
    }
    return deck;
}

let deck = createDeck();

const shuffleDeck = () => {};

const printDeck = _ => {
	for ( let k = 0; k < deck.length; k++ ) {
		console.log( deck[ k ] );
	}
}

const getNextCard = _ => deck.shift();

let playerCards = [ getNextCard(), getNextCard() ];

console.log( '\n' );
console.log( "Welcome to Blackjack!" );
console.log( "You are dealt:" );
console.log( "\t\t" + playerCards[ 0 ] );
console.log( "\t\t" + playerCards[ 1 ] );
console.log( '\n' ); 
 
printDeck();
console.log( deck );
