/*
*    SuffleArray_v1.js
*    Function to Suffle an Array of Objects (cards in this case).
*    by, Mudathir Lawal
*    25th August, 2019
*
*/

const values = [ 
               "Ace", "King", "Queen", "Jack", "Ten",
               "Nine", "Eight", "Seven", "Six", "Five",
               "Four", "Three", "Two"
];

const suits = [ 'Hearts', 'Clubs', 'Diamonds', 'Spades' ];

// This func...
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

let shuffledDeck = [],
    deckCards = createDeck(),
    newCard = deckCards.shift();

const checkIfEmptyAndAssignValue = ( $shuffledDeck, $deckCards, $newCard ) => { // param1, param2, param3
	const randomIndex = Math.trunc( Math.random() * 52 );
	if ( $shuffledDeck[ randomIndex ] === undefined ) {
	    $shuffledDeck[ randomIndex ] = $newCard; // '$newCard' is a param diff than the global 'newCard'.
	    newCard = deckCards.shift(); // Updating the global variable 'newCard', not "$newCard", so that I 
	}                                // can always access a new card outside this function declaration.
	else {
		checkIfEmptyAndAssignValue( $shuffledDeck, $deckCards, $newCard );  
	}  
    // In version 2 of this function, there is a loop here. The 
    // absence of that loop here makes this version more efficient.
};

//
const createShuffledDeck = _ => {
	for ( let i = 0; i < 52; i++ ) {
	 	checkIfEmptyAndAssignValue( shuffledDeck, deckCards, newCard );
	} 
};

//
console.log( 'Type of \"newCard\" is: ' + typeof( newCard ) + '.' );
console.log( 'Value of \"newCard\" is: ' + newCard + '.' );
//
createShuffledDeck();
console.log( shuffledDeck );
console.log( deckCards );
console.log( "Final value of \"newCard\" object outside loop: " + newCard + "." );

