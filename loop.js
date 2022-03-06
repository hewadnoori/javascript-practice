function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}
//runs the code 10 times
let counter = 0
while (counter < 10) {
    console.log(`The random number is ${getRandomNumber(10)}`)
    counter += 1;
}
//runs the code ten times but runs the code block and then checks if the condition is met to end.
let counter2 = 0
do {
    console.log(`The random number is ${getRandomNumber(10)}`)
    counter2++; //this is exactly the same as counter += 1, you can also use -- to decrement.
} while (counter2 < 10);

//runs the code ten times and is a more compact version of while. it initializes the counter, sets the break requirement for the loop, and the counter in one line. 
for (let i = 0; i < 10; i++) {
    console.log(`The random number is ${getRandomNumber(10)}`)
}