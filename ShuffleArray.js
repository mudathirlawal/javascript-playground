/*
*    SuffleArray_v1.js
*    Function to Suffle an Array of Objects (cards in this case).
*    by, Mudathir Lawal
*    24th August, 2019
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

let deckCards = createDeck(),
    shuffledDeck = [],
    newCard = null,
    isLastIteration = false;

const checkIfEmptyAndAssignValue = () => {
	const randomIndex = Math.trunc( Math.random() * 52 );
	if ( shuffledDeck[ randomIndex ] === undefined ) {
	    shuffledDeck[ randomIndex ] = newCard;
	    newCard = deckCards.shift();
	}
	else {
		checkIfEmptyAndAssignValue();
	}
    
    // 
	if ( isLastIteration ) {
	    for ( let j = 0; j < 52; j++ ) {
	    	if ( shuffledDeck[ j ] === null ) {
	    		shuffledDeck[ j ] = newCard;
	    		console.log( "Final value of \"newCard\" inside loop: " + newCard + "." );
	    	}
	    }
	}
};

//
const createShuffledDeck = _ => {
	for ( let i = 0; i < 52; i++ ) {
	 	isLastIteration = ( i === 51 ) ? true : false;
	 	checkIfEmptyAndAssignValue();
	} 
};

/** OR:
const createShuffledDeck = _ => {
	for ( let i = 0; i < 52; i++ ) {
		const getLastIndexFlag = () => {
			if ( i === 51 ) {
				return true;
			} 
		};
		isLastIndex = getLastIndexFlag( i );
	 	checkIfEmptyAndAssignValue();
	} 
}; **/

//
console.log( 'Type of \"newCard\" is: ' + typeof( newCard ) + '.' );
console.log( 'Value of \"newCard\" is: ' + newCard + '.' );
//
console.log( "Initial value of \"isLastIteration\" outside loop: " + isLastIteration + "." );
createShuffledDeck();
console.log( shuffledDeck );
console.log( deckCards );
console.log( "Final value of \"isLastIteration\" outside loop: " + isLastIteration + "." );
console.log( "Final value of \"newCard\" outside loop: " + newCard + "." );

