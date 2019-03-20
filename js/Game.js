/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
 // 	This constructor contains the phrases, missed points and setting the active phrase to null
 	constructor(){
 		this.missed = 0;
 		this.phrases = [
 			new Phrase('May the Force be with you'),
 			new Phrase('You talking to me'),
 			new Phrase('ET phone home'),
 			new Phrase('Bond James Bond'),
 			new Phrase('I am Iron Man')
 		];
 		this.activePhrase = null;
 	}

 	// This function runs through all the phrases choosing a random one each time the game starts or resets
 	getRandomPhrase(){
 		const random = Math.floor(Math.random() * this.phrases.length);
 		return this.phrases[random];
 	}

 	// This starts the game when the user has either started from the beginning or chooses to play again after completing the last game
 	startGame(){
 		this.gameReset();
 		$('#overlay').fadeOut('slow'); let phrase = this.getRandomPhrase();
 		phrase.addPhraseToDisplay(phrase);
 		this.activePhrase = phrase;
 	}
 	// This function checks if the player has chosen all of the correct letters,
 	// it than returns a boolean to let the other functions know if it the user did win or not
 	checkForWin(){
 		let hiddenLetters = $('.hide');
 		if (hiddenLetters.length == 0){
 			return true;
 		} else {
 			return false;
 		}

 	}
 	// This function checks to see if the user has chosen a wrong letter,
 	// and if so, it changes the heart icon to a lost heart image implicating that the user has lost a life
 	removeLife(){
 		this.missed ++;
 		if (this.missed == 5){
 			return this.gameOver(false);
 		} else {
 			let heartImg = document.querySelector("img[src$='liveHeart.png']");
 			heartImg.src = 'images/lostHeart.png';
 		}
 	}
 	// When the user has completed the game, this function will run to check if the user has won or lost,
 	// depending if the user chose all the right letters or got it wrong
 	gameOver(gameWon){
 		let message = $('#game-over-message');
 		const overlay = $('#overlay');
 		if (gameWon == false){
 			message.html('Game Over, Want to try again?')
 			overlay.removeClass().addClass('lose');
 			overlay.fadeIn('slow');
 		} else {
 			message.html('Awesome! You figured out the Phrase! Want to go again?')
 			overlay.removeClass().addClass('win');
 			overlay.fadeIn('slow');
 		}
 	}
 	// This function checks the users input from either their keyboard or the onscreen keyboard,
 	// and checks to see if the letter chosen is in the phrase or not
 	// changing the color of the button if chosen right or wrong.
 	handleInteraction(button) {
 		button.disabled = true;
 		let buttonLetter = button.innerHTML;
		if (this.activePhrase.checkLetter(buttonLetter) == false){
			button.className = 'wrong';
			this.removeLife();
		} else {
			button.className = 'chosen';
			this.activePhrase.showMatchedLetter(buttonLetter);
			if (this.checkForWin() == true){
				this.gameOver(true);
			} 
		}
	}
	// After the user has completed the game, they can choose to start over again, 
	// in which the whole game will reset, 
	// making sure all the letters are non colored, a new phrase is chosen and all hearts are fully back to normal
	gameReset(){
		$('ul').empty();
		let button  = $('button');
		let imageSrc = document.querySelector("img").src;
		let images = $('img');
		for (let i = 0; i < button.length; i++){
			button[i].className = 'key';
			button[i].disabled = false;
		}
		if (imageSrc.includes('lostHeart.png') == true){
			for (let i = 0; i < images.length; i++){
				images.attr('src', 'images/liveHeart.png');
			}
		}

	}
 }