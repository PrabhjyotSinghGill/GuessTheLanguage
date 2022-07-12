const inputs = document.querySelector(".inputs");
const resetButton = document.querySelector(".reset-btn");
const hintTag = document.querySelector(".hint");
const guessLeft = document.querySelector(".guess-left span");
const wrongLetter = document.querySelector(".wrong-letter span");
const typingInput = document.querySelector(".typing-input");

let word, maxGuesses, corrects = [], incorrects = [];

function randomWord() {
  //generates random number b/w 0 - 1 and gets multiplied with length
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word;
  maxGuesses = word.length >= 5 ? 8:6;
  correctLetters = [];
  incorrectLetters = [];
  let hint = ranObj.hint;
  console.log(word);
  wrongLetter.innerText = incorrectLetters;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrects;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled></input>`;
  }
  inputs.innerHTML = html;
  hintTag.innerHTML = `Hint: <span>${hint}</span>`;
}

randomWord();

function initGame(e){
  let key = e.target.value;
  if(key.match(/^[A-Za-z]+$/) && !incorrects.includes() && !corrects.includes(key)){
    console.log(key)
    if(word.includes(key)){
      for(let i = 0; i < word.length; i++){
        if(word[i] === key){
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key; 
        }
      }
    }else{
      maxGuesses--;
      incorrects.push(`${key}`);
    }
    guessLeft.innerText = maxGuesses
    wrongLetter.innerText = incorrects;
  }
  typingInput.value = "";
  setTimeout(() =>{
    if(corrects.length === word.length){
      alert(`Congrats! ${word.toUpperCase()} it is!`)
    }else if(maxGuesses < 1){
      alert("Game Over!");
      for(let i = 0; i < word.length; i++){
          inputs.querySelectorAll("input")[i].value = word[i]; 
      }
    }
  })
}

resetButton.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());