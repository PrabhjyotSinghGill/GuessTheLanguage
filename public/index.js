const inputs = document.querySelector(".inputs");
const resetButton = document.querySelector(".reset-btn");
const hintTag = document.querySelector(".hint");
const typingInput = document.querySelector(".typing-input");

function randomWord() {
  //generates random number b/w 0 - 1 and gets multiplied with length
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  let word = ranObj.word;
  let hint = ranObj.hint;
  console.log(word);

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
  if(key.match(/^[A-Za-z]+$/)){
    
  }
  console.log(key)
}

resetButton.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());