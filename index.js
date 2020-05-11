const fifaData = require('./fifa.js');



// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */

const worldCupFinal = fifaData.filter(match => match.Year === 2014 && match.Stage === 'Final')[0];
console.log("TASK 1A " + (worldCupFinal["Home Team Name"]))
console.log("TASK 1B " + (worldCupFinal["Away Team Name"]))
console.log("TASK 1C " + (worldCupFinal["Home Team Goals"]))
console.log("TASK 1D " + (worldCupFinal["Away Team Goals"]))
console.log("TASK 1E " + (worldCupFinal["Win conditions"].split(3)))

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(Data) {
    return (Data).filter(item => item.Stage === "Final")
};
(getFinals(fifaData));



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let newResult = callback(fifaData);
    return (newResult.map(item => item.Year));
};
console.log("TASK 3 = " + (getYears(getFinals)));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
return callback(fifaData).map(match => {
    if (match["Home Team Goals"] > match["Away Team Goals"]) {
        return match["Home Team Name"]
        } else {
        return match["Away Team Name"]
        }
    })
}
console.log("TASK 4 = " + (getWinners(getFinals)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and 
returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callBack2) {
    const years = callBack2(getFinals)
    return callback1(getFinals).map((teamName, index) => `In ${years[index]}, ${teamName} won the world cup!`)
};

console.log("TASK 6 = " + (getWinnersByYear(getWinners, getYears)));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns 
the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

const finalsData = getFinals(fifaData);
const teamInitials = []
const getWinnersInitials = (data) => {

for (let i in data) {
  let ti = (data[i])
  if ((ti['Home Team Goals']) < ti['Away Team Goals']) {
    teamInitials.push(ti['Away Team Initials'])
  } else {
    teamInitials.push(ti['Home Team Initials'])
  }
    }
}
getWinnersInitials(finalsData);

function getCountryWins (data, teamInitials) {
  return data.filter(item => item === teamInitials).length;
}
console.log("TASK 7 = " + (getCountryWins (teamInitials, 'USA')))


    /* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average 
  number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

  function getAverageGoals(data) {
    const homeTeamGoals = data.length
    let average = data.reduce((acc, currentValue) => {
    return acc += currentValue["Home Team Goals"];
    }, 0)
        
    const awayTeamGoals = data.length
    let average2 = data.reduce((acc, currentValue) => {
    return acc += currentValue["Away Team Goals"];
    }, 0)
    
    let averageGoals = [average/homeTeamGoals, average2/awayTeamGoals];
    
    return averageGoals;
    
    };
    
    console.log("TASK 8 = " + (getAverageGoals(fifaData)));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns 
the team with the most goals scored per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates 
the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


