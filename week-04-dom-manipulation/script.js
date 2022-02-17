
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}

function fillGenderOutput() {

  // Get the adjective input element
  const genderoneinput = document.getElementById('gender-one-input');
  // Get the text from the input element
  const genderOne = genderoneinput.value;

  // Get the adjective output element
  const genderoneoutput = document.getElementById('gender-one-output');
  // Set the text of the input element
  genderoneoutput.innerText = genderOne;

  // Get the output container element
  const outputDiv = document.getElementById('output2');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}


function fillComedyOutputs() {

  const comedyoneinput = document.getElementById('comedy-one-input');

  const comedyOne = comedyoneinput.value;

  const comedyoneoutput = document.getElementById('comedy-one-output');

  comedyoneoutput.innerText = comedyOne;

  const outputDiv = document.getElementById('output3');

  outputDiv.style.display = 'block';
}


function fillNetOutputs() {

  const netoneinput = document.getElementById('net-one-input');

  const netOne = netoneinput.value;

  const netoneoutput = document.getElementById('net-one-output');

  netoneoutput.innerText = netOne;

  const outputDiv = document.getElementById('output4');

  outputDiv.style.display = 'block';
}

function fillPizzaOutputs() {

  const pizzaoneinput = document.getElementById('pizza-one-input');

  const pizzaOne = pizzaoneinput.value;

  const pizzaoneoutput = document.getElementById('pizza-one-output');

  pizzaoneoutput.innerText = pizzaOne;

  const outputDiv = document.getElementById('output5');

  outputDiv.style.display = 'block';
}
