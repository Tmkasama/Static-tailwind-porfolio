class HangmanGame {
  constructor(words) {
    this.words = words;
    this.randomWord = this.chooseRandomWord();
    this.wordArray = this.randomWord.split("");
    this.guessedLetters = new Array(this.wordArray.length).fill(false);
    this.remainingTries = 6;

    this.wordDisplay = document.getElementById("word-display");
    this.incorrectGuesses = document.getElementById("incorrect-guesses");
    this.letterInput = document.getElementById("letter-input");
    this.guessButton = document.getElementById("guess-button");
    this.gameStatus = document.getElementById("game-status");

    this.updateRemainingTriesDisplay();

    this.guessButton.addEventListener("click", () => this.guessLetter());
    this.renderWordDisplay();
  }

  chooseRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  updateRemainingTriesDisplay() {
    const remainingTriesCount = document.getElementById("remaining-tries-count");
    remainingTriesCount.textContent = this.remainingTries;
  }

  renderWordDisplay() {
    this.wordDisplay.innerHTML = "";
    this.wordArray.forEach((letter, index) => {
      if (this.guessedLetters[index]) {
        this.wordDisplay.textContent += letter;
      } else {
        this.wordDisplay.textContent += "_ ";
      }
    });
  }

  guessLetter() {
    const letter = this.letterInput.value.toLowerCase();

    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
      alert("Зөвхөн 1 үсэг болон утга бичнэ үү.");
      this.letterInput.value = "";
      return;
    }

    if (this.guessedLetters.includes(letter)) {
      alert("Энэ үсгийг оруулсан байна.");
      this.letterInput.value = "";
      return;
    }

    let isCorrectGuess = false;

    for (let i = 0; i < this.wordArray.length; i++) {
      if (this.wordArray[i] === letter) {
        this.guessedLetters[i] = true;
        isCorrectGuess = true;
      }
    }

    if (!isCorrectGuess) {
      this.remainingTries--;
      this.incorrectGuesses.textContent += letter + " ";
      this.updateRemainingTriesDisplay();
    }

    this.renderWordDisplay();
    this.letterInput.value = "";

    if (this.remainingTries === 0) {
      this.gameStatus.textContent = "Та ялагдлаа! Үг бол: " + this.randomWord;
      this.disableInput();
    }

    if (this.guessedLetters.every((letter) => letter)) {
      this.gameStatus.textContent = "Та яллаа!";
      this.disableInput();
    }
  }

  disableInput() {
    this.letterInput.disabled = true;
    this.guessButton.disabled = true;
  }
}

const words = ["javascript", "hangman", "programming", "computer", "web"];
const game = new HangmanGame(words);
