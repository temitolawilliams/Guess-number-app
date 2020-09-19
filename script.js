let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;
let low = 1;
let high = 100;


const updateRange = () => {
    const rangeOutput = document.getElementById('rangeOutput');
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + '%';
    rangeOutput.style.marginRight = 100 - high + '%';
    rangeOutput.classList.add('flash')

    const lowValue = document.getElementById('low');
    lowValue.style.flex = low + '%';
    lowValue.style.background = '#ef7b54';

    const space = document.getElementById('space');
    space.style.flex = high - low + '%';
    space.style.background = '#83e1do';

    const highValue = document.getElementById('high');
    highValue.style.flex = 100 - high + '%';
    highValue.style.background = '#ef7b54';
    
}

const gameOver = () => {
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('inputBox').setAttribute('readonly','readonly')
}

const newGame = () =>{
    window.location.reload()
}


//Landingpage screen function
const init = () => {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess)
    document.getElementById('newGameButton').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';

}

// startgame landing page function
const startGame = () => {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';

}
//easy mode function
const easyMode = ()  => {
    startGame()
    maxGuesses = 10;
}

//hard mode function
const hardMode = () => {
    startGame()
    maxGuesses = 5;
}

//game logic
const compareGuess = () => {
   const userInputs = Number(document.getElementById('inputBox').value);
   userGuesses.push(' ' + userInputs );
   document.getElementById('guesses').innerHTML = userGuesses;
   attempts++;
   document.getElementById('attempts').innerHTML = attempts
   

  if (attempts < maxGuesses) {
    if (userInputs < computerGuess) {
       if(userInputs > low) low = userInputs
        document.getElementById('guessOutput').innerHTML ='Your guess is low'
        document.getElementById('inputBox').value = '';
       }
       else if (userInputs > computerGuess) {
          if(userInputs < high) high = userInputs
           document.getElementById('guessOutput').innerHTML =  'Your guess is high'
           document.getElementById('inputBox').value = '';
       }else {
        document.getElementById('guessOutput').innerText = `You're Correct, 
         You got it after ${attempts} attempts`
         gameOver();
         
       }
  }else {
    if (userInputs < computerGuess) {
        document.getElementById('guessOutput').innerHTML ='You loose <br>  Answer was ' + computerGuess
            gameOver()
       
       }
       else if (userInputs > computerGuess) {
           document.getElementById('guessOutput').innerHTML =  'You loose <br>  Answer was ' + computerGuess
                gameOver()
       }else {
        document.getElementById('guessOutput').innerText = `You're Correct,
         You got it after ${attempts} attempts`
         gameOver()
        
       }
  }
 updateRange()

}