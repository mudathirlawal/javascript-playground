/*
*
*    Blackjack App
*    by, Mudathir Lawal
*    22nd August, 2019
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

let sortedDeck = createDeck(),
    unSortedDeck = [],
    lastIndex = null,
    newCard,
    randomIndex;

const shuffleDeck = _ => {
	const checkIfEmptyAndAssignValue = () => {
		randomIndex = Math.trunc( Math.random() * 52 );
	 	if ( unSortedDeck[ randomIndex ] === undefined ) {
		    unSortedDeck[ randomIndex ] = newCard;
		    newCard = sortedDeck.shift();
	    }
	    else {
			checkIfEmptyAndAssignValue();
	    }
	    if ( lastIndex === 51 ) {
		    	for ( let j = 0; j < 52; j++ ) {
		    		if ( unSortedDeck[ j ] === undefined ) {
		    			unSortedDeck[ j ] = newCard;
		    		}
		    	}
		}
	};
	for ( let i = 0; i < 51; i++ ) {
	 	checkIfEmptyAndAssignValue();
	 	const isLastIndex = () => {
	 		if ( i === 51 ) {
	 		    return i;
	 	    }  
	 	};
	 	lastIndex = isLastIndex();
	} 
};

console.log( lastIndex );
shuffleDeck();
console.log( unSortedDeck );
console.log( sortedDeck );
console.log( lastIndex );