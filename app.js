const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: []
  getGuess: function(guess){
    prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`)
    const parsedGuess = parseInt(guess)
    while (parsedGuess <= this.biggestNum && parsedGuess >= this.smallestNum) {
      return parsedGuess
    }
    if (isNaN(parsedGuess)) {
      return NaN
    }
  }
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      getGuess()
      while (getGuess !== this.secretNum) {
        prevGuess.push(getGuess())
      }
  }
  
}
