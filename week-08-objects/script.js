// Array of objects representing a todo list.
// Modify this array to contain your own list.
const teamArray = [
  {team: 'Boston Celtics', wins: 3508, Games: 5942},
  {team: 'Los Angeles Lakers', wins: 3458, Games: 5831},
  {team: 'Philadelphia 76ers', wins: 2994, Games: 5767},
  {team: 'Golden State Warrios', wins: 2874, Games: 5931},
  {team: 'New York Knicks', wins: 2871, Games: 5932},
  {team: 'Atlanta Hawks', wins: 2843, Games: 5765},
  {team: 'Detroit Pistons', wins: 2793, Games: 5825},
  {team: 'Sacramento Kings', wins: 2650, Games: 5833},
  {team: 'Oklahoma City Thunder', wins: 2370, Games: 4433},
  {team: 'Phoenix Suns', wins: 2330, Games: 4352},
];


// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  teamArray.sort((a, b) => compare(a.wins, b.wins));

  loadTable();
  loadFewestWins();
  loadAverage();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newTaskTeam = document.getElementById('team-input').value;
  const newTaskWins = document.getElementById('wins-input').value;
  const newTaskYear = document.getElementById('Games-input').value;
  const newTask = {team: newTaskTeam, wins: newTaskWins, Games: newTaskYear};
  teamArray.push(newTask);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Rank'));
  headerRowElement.appendChild(createElement('th', 'Team'));
  headerRowElement.appendChild(createElement('th', 'Wins'));
  headerRowElement.appendChild(createElement('th', 'Games Played'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < teamArray.length; i++) {
    const task = teamArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', task.team));
    rowElement.appendChild(createElement('td', task.wins));
    rowElement.appendChild(createElement('td', task.Games));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadFewestWins(){
  // Assume the first task is shortest
  let FewestWins = teamArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 0; i < teamArray.length; i++) {
    const task = teamArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.wins < FewestWins.wins) {
      FewestWins = task;
    }
  }
  document.getElementById('fewest-wins').innerText = FewestWins.team;
}

function loadAverage(){
  let total = 0;
 for(let i = 0; i < teamArray.length; i++){
    console.log (total)
   const team = teamArray[i];
    total += Number(team.wins);

 }
  let average = total / teamArray.length;
  console.log (average);
  document.getElementById('average-wins').innerText = average
  }


// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne > valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne < valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
