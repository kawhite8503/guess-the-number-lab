const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: []
  getGuess: function(guess){
    prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`)
    const parsed = parseInt(guess)
    if (isNaN(parsed)) {
      return NaN
    } else if (guess <= this.biggestNum && guess >= this.smallestNum){
      return parsed
    }
    }
  }
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}
