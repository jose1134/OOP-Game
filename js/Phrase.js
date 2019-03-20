/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
	// This sets the phrase to all appear lower case on screen
	constructor(phrase){
		this.phrase = phrase.toLowerCase();
	}
	// The funciton adds the phrase to the display by first taking a phrase,
	// breaking up each letter and adding the elements to the html element
	addPhraseToDisplay(phrase){
		const ul = $('ul');
		let element = ' ';
		for (let i = 0; i < this.phrase.length; i ++){
			if (this.phrase[i] == ' '){
				element += '<li class="space"></li>';
			} else {
				element += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
			}
		}
		ul.html(element);
	}
	// The letter that the user adds needs to be checked and it needs to run through every letter of the phrase
	// making sure that it either is in the phrase or not
	checkLetter(letter){
		return this.phrase.includes(letter);
	}
	// After the letter is checked, this function will ensure that the class is changed allowing the letter to show on the display
	showMatchedLetter(letter){
		let classLetter = `.hide.letter.${letter}`;
		let matchedLetter = document.querySelectorAll(classLetter);
		for(let each of matchedLetter){
			each.classList.remove('hide');
			each.classList.add('show');
		}
	}
}