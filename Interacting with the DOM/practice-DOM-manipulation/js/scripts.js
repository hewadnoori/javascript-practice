// 1: Set the text of the <h1> element
const title = document.querySelector('h1');
title.textContent = "My Activities List";
// 2: Set the color of the <h1> to a different color

title.style.color = "red";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc');
desc.insertAdjacentHTML(
    'afterbegin',
    `A list of <em>fun</em> things I want to do today`
);
//or you can do desc.innerHTML = "A list of <em>fun</em> things I want to do today"

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';
// 5: Create a new list item and add it to the <ul>
const item = document.createElement('li');
item.innerHTML = "<input> Eat ice cream";
list.appendChild(item);
// list.insertAdjacentHTML(
//     'beforeend',
//     `<li><input> Play league of legends</li>`
// );

// 6: Change all <input> elements from text fields to checkboxes
const inToCheck = document.getElementsByTagName('input');;
for (let i = 0; i < inToCheck.length; i++) {
    inToCheck[i].type = 'checkbox';
}
// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteButton = document.createElement('button');
deleteButton.textContent = "Delete";
const extra = document.querySelector('.extra');
//if you want to delete the text in the extra div
//extra.textContent = "";
extra.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container');
container.addEventListener('click', () => {
    container.removeChild(extra);
    //or extra.remove();
})