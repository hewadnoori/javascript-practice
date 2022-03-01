//Math.random() random number between 0 and 1
//Math.round() rounds a number normally
//Math.floor() rounds a number down
//Math.ceil() rounds a number up
//Math.floor(Math.random() * 6) + 1 random number between 1 - 6

//ask user for a number that will determine the upper and lower limit of the random number generator
let lowInp = prompt("give me your lowest number");
let highInp = prompt("give me your highest number");
//users input is used to make the random number generator which is rounded down. the user input is also turned into a integer.
let random = Math.floor((Math.random() * (+highInp - +lowInp + 1)) + +lowInp)
//the results are printed to the console.
console.log(`${random} is a random number between ${lowInp} and ${highInp}`)

