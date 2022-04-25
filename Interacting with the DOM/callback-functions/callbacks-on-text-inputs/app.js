const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
    //target is the element that triggered the event.
    event.target.className = 'highlight';
};
//to remove the highlight when it isnt being focused.
const blurHandler = event => {
    event.target.className = '';
};

nameInput.addEventListener('focus', focusHandler);

nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);

messageTextArea.addEventListener('blur', blurHandler);