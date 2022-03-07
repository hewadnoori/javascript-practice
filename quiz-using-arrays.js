// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
    ["What is the color of the sky?", "blue"],
    ["What is the best food on earth?", "pizza"],
    ["What continent is the U.S. on?", "north america"],
];
let wrong = "";
let right = "";
// 2. Store the number of questions answered correctly
let correct = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < quiz.length; i++) {
    input = prompt(quiz[i][0]);
    if (!input) {
        let message = alert("Please answer with a word");

    }
    else if (quiz[i].includes(input.toLowerCase())) {
        correct += 1;
        right += `<li>${quiz[i][0]}</li>`
    }
    else {
        wrong += `<li>${quiz[i][0]}</li>`
    }
}
// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = `<h3>You got these questions right:</h3>
<ol>
${right}
</ol>
<h3>You got these questions wrong:</h3>
<ol>
${wrong}
</ol>
`