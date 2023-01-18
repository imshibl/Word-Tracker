

const typingArea = document.getElementById("typing-area");
const letterCount = document.getElementById("letter-count");
const wordCount = document.getElementById("word-count");
const timer = document.getElementById("timer");
const duplicateWordsCount = document.getElementById("duplicate-word-count");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

typingArea.addEventListener("input", function() {
  letterCount.innerHTML = `Letters ${typingArea.value.length}`;
  wordCount.innerHTML = `Words ${typingArea.value.split(" ").length}`;
});

typingArea.addEventListener("focus", function() {
  interval = setInterval(updateTimer, 1000);
});

typingArea.addEventListener("blur", function() {
  clearInterval(interval);
  findDuplicateWords(typingArea.value);
  typingArea.disabled = true;
  checkGrammar(typingArea.value);
});

function updateTimer() {
  timer.innerHTML = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
}

function findDuplicateWords(string) {
    let words = string.split(" ");
    var duplicateWordCount = 0;
    var wordCount = {};
    for (var i = 0; i < words.length; i++) {
      if (wordCount[words[i]] === undefined) {
        wordCount[words[i]] = 1;
      } else {
        wordCount[words[i]]++;
        duplicateWordCount++;
      }
    }
  
    // Display the duplicate word count
    duplicateWordsCount.innerHTML = "Duplicate Words: " + duplicateWordCount;
    
}


  
  

  

