const fifaData = require('./fifa.js');



function getFinals(Data) {
    return (Data).filter(item => item.Stage === "Final")
};
(getFinals(fifaData));


const finalsData = getFinals(fifaData);
const num = []

    function numOfWorldCupAppearences (teamInitials) {
 
        return finalsData.filter(val => val["Away Team Initials"]  === teamInitials || val["Home Team Initials"] === teamInitials).length
        }
       
    

console.log(numOfWorldCupAppearences("GER"));
