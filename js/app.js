/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



// //This event handler starts the game as soon as the user presses the start button
// allowing the overlay to fade out and the game to start
let game = '';
$('#btn__reset').on('click', function(){
	game = new Game();
	game.startGame();
 })


// This handler is for the onscreen keyboard, it reads the key that user choses,
// it checks to see if the user has selected a correct or wrong choice based on the function checking the phrase
$('button.key').on('click',function(e){
	game.handleInteraction(e.target);
});

// This handler is for when the user wants to use the keyboard to type in the words to chose,
// it takes the value of what the user has pressed on their keyboard ,
// and passes it into the function checking to see if that letter is in the phrase
$(document).keypress(function(e) {
	const keys = $('.key');
	for (let key of keys){
		if (key.innerHTML == e.key){
			if (key.className == 'key'){
				game.handleInteraction(key);
			}
		}
	}
});