// 
// By:    Mudathir Lawal
// Date:  23/01/2019
//
 
// FORMATTING VARIABLES: 
let NL = '\n';
let TB = '\t';
let ES = '   ';

// CARD VARIABLES:
let playerCards = [];
let greeting = 'Welcome to BlackJack!';
let suits  = [ "Hearts", "Clubs", "Diamonds", "Spades" ];
let values = [ 
                'Ace', 'King', 'Queen', 'Jack', 'Ten', 
                'Nine', 'Eight', 'Seven', 'Six', 'Five', 
                'Four', 'Three', 'Two' 
];

// DOM VARIABLES:
let textArea = document.getElementById( 'text-area' ),
    newGameButton = document.getElementById( 'new-game-btn' ),
    hitButton = document.getElementById( 'hit-btn' ),
    stayButton = document.getElementById( 'stay-btn' );

// GAME VARIABLES:
let dealerScore = 0,
    playerScore = 0,
    playerWon   = false,
    gameOver    = false,
    gameStarted = false,
    deck        = [],
    dealercards = [],
    playerCards = [],

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

// BUTTON CLICKS HANDLER:
newGameButton.addEventListener( 'click', function() {
	gameOver    = false;
	playerWon   = false;
	gameStarted = true;

	deck        = createDeck();
	playerCards = [ getNextCard(), getNextCard() ];
	dealerCards = [ getNextCard(), getNextCard() ];

	newGameButton.style.display = 'none';
	hitButton.style.display     = 'inline';
	stayButton.style.dsiplay    = 'inline';

	showStatus();
} );

// Filling up the deck array: 
function createDeck() {
	let deck = [];

	for ( let suitIdx = 0; suitIdx < suits.length; suitIdx++ ) {
    	for ( let valueIdx = 0; valueIdx < values.length; valueIdx++ ) {
	    	let card = {
	    		suit: suits[ suitIdx ],
	    		value: values[ valueIdx ]
	    	};
	    	deck.push( card );
  		}
 	}
 	return deck;
}
//let deck = createDeck(); // This variable is an array; ie, an object.


console.log ( NL );
console.log ( ES + greeting );
console.log ( NL );
console.log ( ES + 'You are dealt:' );

function getNextCard() {
	return deck.shift();
}

function getCardString( card ) {
	return card.value + ' of ' + card.suit;
}

function showStatus() {
	if ( !gameStarted ) {	
        greeting = greeting.toUpperCase( greeting );
		textArea.innerText = greeting;
		return;  
	}
}

playerCards = [ getNextCard(), getNextCard() ];

console.log ( TB + getCardString( playerCards[0] ) );
console.log ( TB + getCardString( playerCards[1] ) );








/*// Logging the content of the deck array: 
for ( let loopVar = 0; loopVar < deck.length; loopVar++ ) {
  console.log ( TB + deck [ loopVar ] );
}*/
//console.log ( ES + deck.push( values [ valueIdx ] + ' of ' + suits [ suitIdx ] ) );
//deck.push( values [ valueIdx ] + ' of ' + suits [ suitIdx ] );
//console.log ( typeof ( deck ) );
 