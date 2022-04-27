function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'nets') {
    alert("That's correct!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'knicks') {
    alert('Close, but its the other team in new york!');
  } else {
    alert('Wrong! Hint: My favorite team plays in new york!')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'Lambda Chi Alpha') {
    alert("That's correct!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'acacia') {
    alert('close!');
  } else {
    alert('Wrong! Hint: I said it in the description above')
  }
}
