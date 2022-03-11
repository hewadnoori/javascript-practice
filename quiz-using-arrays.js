// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
    { question: "What is the color of the sky?", answer: "blue" },
    { question: "What is the best food on earth?", answer: "pizza" },
    { question: "What continent is the U.S. on?", answer: "north america" },
];
let wrong = [];
let right = [];
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
    let question = quiz[i].question;
    let answer = quiz[i].answer;
    let response = prompt(question);


    if (response === answer) {
        correct++;
        right.push(question);
    }
    else {
        wrong.push(question);
    }
}
function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

// 4. Display the number of correct answers to the user
let html = `
    <h1>You got ${correct} question(s) correct</h1>
    <h2>You got these questions right:</h2>
    <ol>${createListItems(right)}</ol>
  
    <h2>You got these questions wrong:</h2>
    <ol>${createListItems(wrong)}</ol>
  `;

document.querySelector('main').innerHTML = html;
// 4. Display the number of correct answers to the user
