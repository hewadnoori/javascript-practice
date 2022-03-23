// 1: Set the text of the <h1> element
const title = document.querySelector('h1');
title.insertAdjacentHTML(
    `afterbegin`,
    `DOM Manipulation Practice`
);
// 2: Set the color of the <h1> to a different color

title.style.color = "red";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc');
desc.insertAdjacentHTML(
    'afterbegin',
    `This is my practice for <strong>DOM manipulation</strong> `
);

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';
// 5: Create a new list item and add it to the <ul>
list.insertAdjacentHTML(
    'beforeend',
    `<li><input> Play league of legends</li>`
);

// 6: Change all <input> elements from text fields to checkboxes
const inToCheck = document.querySelectorAll('li input'); console.log(inToCheck);

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
