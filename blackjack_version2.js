/*
*
*    Blackjack App
*    by, Mudathir Lawal
*    15/08/2019
*
*/

let deck = [ ];
const values = [ 
               "Ace", "King", "Queen", "Jack", "Ten",
               "Nine", "Eight", "Seven", "Six", "Five",
               "Four", "Three", "Two"
];
const suits = [ 'Hearts', 'Clubs', 'Diamonds', 'Spades' ];

const addCardToDeck = ( valuesLoopVar, suitsLoopVar ) => {
	return deck.push( values[ valuesLoopVar ] + ' of ' + suits[ suitsLoopVar ] );
};

const traverseSuitsArray = ( $valuesLoopVar ) => {
	for ( let i = 0; i < suits.length; i++ ) {
	    addCardToDeck( $valuesLoopVar, i );
		//console.log( deck[ $valuesLoopVar ] );
	}
};

const traverseValuesArray = _ => {
	for ( let j = 0; j < values.length; j++ ) {
		traverseSuitsArray( j );
    }
}

const fillUpTheDeck = _ => {
	traverseValuesArray();
};

const shuffleDeck = () => {};

const printDeck = _ => {
	for ( let k = 0; k < deck.length; k++ ) {
		console.log( deck[ k ] );
	}
}

fillUpTheDeck();
let playerCards = [ deck[0], deck[7] ];

console.log( '\n' );
console.log( "Welcome to Blackjack!" );
console.log( "You are dealt:" );
console.log( "\t\t" + playerCards[ 0 ] );
console.log( "\t\t" + playerCards[ 1 ] );
console.log( '\n' ); 
 
//deckUp2(); 
printDeck();
console.log( deck );


// ALTERNATIVE SOLUTIONS:
// const deckUp = () => {
// 	for ( let valueIdx = 0; valueIdx < values.length; valueIdx++ ) {
// 		for ( let suitIdx = 0; suitIdx < suits.length; suitIdx++ ) {
// 			addCardToDeck( valueIdx, suitIdx );
// 		}
// 	}
// };

// const deckUp2 = () => {
// 	for ( let suitIdx = 0; suitIdx < suits.length; suitIdx++ ) {
// 		for ( let valueIdx = 0; valueIdx < values.length; valueIdx++ ) {
// 			addCardToDeck( valueIdx, suitIdx );
// 		}
// 	}
// };