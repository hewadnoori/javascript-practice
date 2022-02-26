/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
let shoutMessage;

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let math_1 = prompt("what is 5 + 5?");
if (+math_1 === 10) {
    correct += 1;
}
let math_2 = prompt("what is 20 * 10?");
if (+math_2 === 200) {
    correct += 1;
}
let sun = prompt("what is in the center of our solar system?")
if (sun.toUpperCase() === "SUN") {
    correct += 1;
}
let mercury = prompt("what is the planet closest to our sun?")
if (mercury.toUpperCase() === "MERCURY") {
    correct += 1;
}
let na = prompt("what continent is the U.S. on?")
if (na.toUpperCase() === "NORTH AMERICA") {
    correct += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (+correct === 5) {
    rank = "Gold";
}
else if (+correct === 4 || +correct === 3) {
    rank = "Silver";
}
else if (+correct === 2 || +correct === 1) {
    rank = "Bronze";
}
else if (+correct === 0) {
    rank = "No crown";
}
// 6. Output results to the <main> element
shoutMessage = `You got ${correct} out of 5 questions correct.
Crown earned: ${rank}`;
document.querySelector('main').innerHTML = shoutMessage;