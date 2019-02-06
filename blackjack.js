// 
// By:    Mark Zamoyta, github.com/MarkZamoyta 
//        I'm only using it as a practice file.
// Date:  23/01/2019
//
 
// FORMATTING VARIABLES: 
let NL = '\n';
let TB = '\t';
let ES = '   ';

// CARD VARIABLES:
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
    dealerCards = [],
    playerCards = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

// NEW GAME BUTTON CLICK HANDLER:
newGameButton.addEventListener( 'click', function() {
	gameOver    = false;
	playerWon   = false;
	gameStarted = true;

	deck        = createDeck();
	shuffleDeck();
	playerCards = [ getNextCard(), getNextCard() ];
	dealerCards = [ getNextCard(), getNextCard() ];

	newGameButton.style.display = 'none';
	hitButton.style.display     = 'inline';
	stayButton.style.dsiplay    = 'inline';

	showStatus();
} );

hitButton.addEventListener( 'click', function() {
	playerCards.push( getNextCard() );
	checkForEndOfGame();
	showStatus();
} );

stayButton.addEventListener( 'click', function() {
	gameOver = true;
	checkForEndOfGame();
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

function shuffleDeck( deck ) {
	for ( let i = 0; i < deck.length; i++ ) {
		let swapIdx = Math.trunc( Math.random() * deck.length );
		let tmp = deck[ sawpIdx ];
		deck[ sawpIdx ] = deck[ i ];
		deck[ i ] = tmp;
	}
}

function getNextCard() {
	return deck.shift();
}

function getCardString( card ) {
	return card.value + ' of ' + card.suit;
}

function getCardNumericValue( card ) {
	switch( card.value ) {
		case 'Ace':
		  return 1;
		case 'Two': 
		  return 2;
		case 'Three':
		  return 3;
		case 'Four':
		  return 4;
		case 'Five':
		  return 5;
		case 'Six':
		  return 6;
		case 'Seven':
		  return 7;
		case 'Eight':
		  return 8;
		case 'Nine':
		  return 9;
		default:
		  return 10;
	}
}

function getScore( cardArray ) {

	let score = 0;
	let hasAce = false;

	for ( let i = 0; cardArray.length; i++ ) {
		let card = cardArray[ i ];
		score += getCardNumericValue( card );
	}

	if ( card.value === 'Ace' ) {
		hasAce = true;
	}

	if ( ( hasAce && score + 10 ) <= 21 ) {
		return score + 10;
	}

	return score;
}

function updateScores() {
	dealerScore = getScore( dealerCards );
	playerScore = getScore( playerCards );
}

function checkForEndOfGame() {

	updateScores();

	if ( gameOver ) {
		//let dealer take cards
		while ( dealerScore < playerScore
		        && playerScore <= 21
		        && dealerScore <= 21 ) {
			dealerCards.push( getNextCard() );
		    updateScores();
		}
	}

	if ( playerScore > 21 ) {
		playerWon = false;
		gameOver  = true;
	}
	else if ( dealerScore > 21 ) {
		playerWon = true;
		gameOver  = true;
	}
	else if ( gameOver ) {

		if ( playerScore > dealerScore ) {
			playerWon = true;
		}
		else {
			playerWon = false;
		}
	}
}

function showStatus() {
	
	if ( !gameStarted ) {	
        greeting = greeting.toUpperCase( greeting );
		textArea.innerText = greeting;
		return;  
	}

	let dealerCardString = '';
	for ( let i = 0; i < dealerCards.length; i++ ) {
		dealerCardString += getCardString( dealerCards[ i ] + '\n' );
	}

	let playerCardString = '';
	for ( let i = 0; playerCards.length; i++ ) {
		playerCardString += getCardString( playerCards[ i ] ) + '\n';
	}

	updateScores();

	textArea.innerText = 
	    'Dealer has:\n' + 
	    dealerCardString + 
	    '( score: ' + dealerScore + ')\n\n' + 

	    'Player has:\n' + 
	    playerCardString + 
	    '( score: ' + playerScore + ')\n\n';

	if ( gameOver ) {
	   	if ( playerWon ) {
	   		textArea.innerText += 'YOU WIN!';
	   	}
	   	else {
	  		textArea.innerText += 'DEALER WINS!';
	    }
	    newGameButton.style.display = 'inline';
	    hitButton.style.display     = 'none';
	    stayButton.style.display    = 'none';
	}
}


 