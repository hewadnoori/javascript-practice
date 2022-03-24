
//This is a function
function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
//this is a function expression. this is an anonymous expression because it has no name.
const getRandomNumber = function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
};
//this is a function arrow expression.This is also an anonymous expression.
const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
};

// function greeting(name = "student") the name parameter has a default parameter value if no arguement is passed through it.

let lowInp = prompt("give me your lowest number");
let highInp = prompt("give me your highest number");
let random;
function randomNumber(lowInp, highInp) {
    random = Math.floor((Math.random() * (+highInp - +lowInp + 1)) + +lowInp)
    return random;
}
//users input is used to make the random number generator which is rounded down. the user input is also turned into a integer.

//the results are printed to the console.
randomNumber(lowInp, highInp);
console.log(`${random} is a random number between ${lowInp} and ${highInp}`)