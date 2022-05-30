const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.prevGuesses.push(this.getGuess())
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) 
  },
  getGuess: function(){
    let parsedGuess
    while(!parsedGuess || parsedGuess > this.biggestNum || parsedGuess < this.smallestNum) {
      parsedGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      if (isNaN(parsedGuess) || parsedGuess > this.biggestNum || parsedGuess < this.smallestNum) {
        alert('This is not a valid entry')
    }}
    return parsedGuess
  },
  render: function() {
    if (this.secretNum === this.prevGuesses[this.prevGuesses.length - 1]) {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses`)
    } else if (this.secretNum < this.prevGuesses[this.prevGuesses.length - 1]) {
      alert(`Your guess is too high. Previous guesses ${this.prevGuesses.join(', ')}`)
    } else if (this.secretNum > this.prevGuesses[this.prevGuesses.length - 1]) {
      alert(`Your guess is too low. Previous guesses ${this.prevGuesses.join(', ')}`)
    }
  }
}

game.play()