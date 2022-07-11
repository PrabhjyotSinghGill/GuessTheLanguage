const inputs = document.querySelector(".inputs");
const resetButton = document.querySelector(".reset-btn");
const hintTag = document.querySelector(".hint");

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

resetButton.addEventListener("click", randomWord);