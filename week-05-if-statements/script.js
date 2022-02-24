// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
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

  if(answerTwo == 'eagles') {
    alert("That's correct!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'steelers') {
    alert('The other team in Pennsylvania');
  } else {
    alert('Wrong! Hint: The mascot is our national bird!')
  }
}



// When this function is called, it takes the user's answer to the third
// question and uses if statements to check whether it's correct.
function submitAnswerThree() {
  // Get answer three's input element
  const answerThreeInput = document.getElementById('answer-three-input');
  // Get the number from answer three's input element
  const answerThree = answerThreeInput.value;

  if(answerThree == 'red') {
    alert("That's correct!");
    hide('question-three');
    show('question-four');
  } else if(answerThree == 'blue') {
    alert('Its a different primary color');
  } else {
    alert('Wrong! Hint: It is the first color in the rainbow!')
  }
}



// When this function is called, it takes the user's answer to the fourth
// question and uses if statements to check whether it's correct.
function submitAnswerFour() {
  // Get answer four's input element
  const answerFourInput = document.getElementById('answer-four-input');
  // Get the number from answer four's input element
  const answerFour = answerFourInput.value;

  if(answerFour == 'pizza') {
    alert("That's correct!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'wings') {
    alert('It is a popular game day food');
  } else {
    alert('Wrong! Hint: This food has sauce and cheese!')
  }
}



// When this function is called, it takes the user's answer to the fifth
// question and uses if statements to check whether it's correct.
function submitAnswerFive() {
  // Get answer five's input element
  const answerFiveInput = document.getElementById('answer-five-input');
  // Get the number from answer five's input element
  const answerFive = answerFiveInput.value;

  if(answerFive == 'dog') {
    alert("That's correct!");
    hide('question-five');
    show('done');
  } else if(answerFive == 'wolf') {
    alert('Its in the same family as a wolf');
  } else {
    alert('Wrong! Hint: This animal is a popular family animal')
  }
}


// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
