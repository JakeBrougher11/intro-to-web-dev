// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `You would not believe your eyes
If ten million fireflies
Lit up the world as I fell asleep
'Cause they fill the open air
And leave teardrops everywhere
You'd think me rude but I would just stand and stare
I'd like to make myself believe that planet earth turns slowly
It's hard to say that I'd rather stay awake when I'm asleep
'Cause everything is never as it seems
'Cause I'd get a thousand hugs
From ten thousand lightning bugs
As they tried to teach me how to dance
A foxtrot above my head
A sock hop beneath my bed
A disco ball is just hanging by a thread (thread, thread)
I'd like to make myself believe that planet earth turns slowly
It's hard to say that I'd rather stay awake when I'm asleep
'Cause everything is never as it seems (when I fall asleep)`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '').replace('!', '').replace('"', '').replace (':', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}
function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}
function displayNameWords() {
  const nameWordsElement = document.getElementById('name-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.startsWith ('J') || word.startsWith ('j')) {
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       nameWordsElement.appendChild(wordElement);
    }
  }
}
function displayLongestWord() {
  const longestWordElement = document.getElementById('longest-word');

  let longestWord = wordsArray[0];

  for (let i = 1; i < wordsArray.length; i++) {

    if(wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
   wordElement.innerText = longestWord;
   longestWordElement.appendChild(wordElement);}

function displayThirdWord() {
  let thirdWordElement = document.getElementById('third-word');

  for(let i = 0; i < wordsArray.length; i +=3){
    const word = wordsArray[i];
    const wordElement = document.createElement('li');
     wordElement.innerText = word;
     thirdWordElement.appendChild(wordElement);
  }
}

function displayUncommonWords() {

  let commonWords = ['the', 'be', 'to', 'of', 'and', 'And', 'a', 'in', 'that', 'have', 'I'];
   let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray){

    if(!commonWords.includes(word)){
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       uncommonWordsElement.appendChild(wordElement);
    }
  }
}




// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  displayShortWords();
  displayNameWords();
  displayLongestWord();
  displayThirdWord();
  displayUncommonWords();
}
  // TODO: Call your functions here!
