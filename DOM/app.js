// const body = document.body;//this references the body element and assigns it to a variable

// body.addEventListener('click', () => { // called the addeventlistener on the body, instructing the browser to do something when its clicked.
//     body.innerHTML = '<h1>Hello, world!</h1>'; //told the browser to manipulate the body element by changing its inner HTML for every click event.
// });                       



const btnCreate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
btnCreate.addEventListener('click', () => {
    //const headline = document.getElementById('headline');
    //headline.style.border = 'solid 4px black'
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');
    //const item = document.createElement('li');
    //headline.textContent = input.value; // this changes the text content of the headline var to whatever the user inputs after they click the update heading button

    //document.querySelector('ul').innerHTML = '<li>Read a book</li>' // this changes the html of the page and clears the content of the ul, adding only one li
    // headline.className = "grow";//this adds the class attribute to the headline element that makes it grow.
    //item.textContent = input.value;

    //list.append(item); //this will add the new li's to the end of the list, to add it to the beginning, you can use the prepend method.
    list.insertAdjacentHTML( // this method is one of the fastest and cleanest methods to adding html.
        'afterbegin',
        `<li>${input.value}</li>`
    );
    input.value = ''; // this empties the input value and clears the users input from the site
})
//this hides and unhides the list.
btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');
    if (listContainer.style.display === "none") {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style'); //this removes the style display attribute from the html because the default value of display is block so you dont need to define that.
    }
    else {
        btnToggle.textContent = 'Show list';
        listContainer.style.display = 'none';
    }
});
btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();
})
//if you want to select multiple elements by tag names.
document.getElementsByTagName('li');
document.getE
//if you want to find the amount of items in an html collection
document.getElementsByTagName('li').length

//returns the first li element containing the text 'make coffee'
document.getElementsByTagName('li')[0];

//returns a collection of html tags that you can look through to see which one you would want to interact with.
document.getElementsByTagName('button');

//interacts with the first button
document.getElementsByTagName('button')[0].style.color = 'yellow';

//THIS WONT WORK BECAUSE YOU CANNOT CALL HTML collections themselves because the collection doesn't have the same properties and methods as the individual elements. 
//document.getElementsByTagName('li').style.backgroundColor = 'skyblue'

const items = document.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
    items[i].style.color = 'orchid';
}

const highlights = document.getElementsByClassName('highlight');
//another more compact way to loop through an array. This is a for of loop that uses the highlight var as the i var and loops through the highlights which has three li's linked to it.
for (const highlight of highlights) {
    highlight.style.backgroundColor = 'cornsilk';
    console.log(highlight);
}

//const myInput = document.querySelector('input');
//myInput.title = 'Type heading text here';
//if you enter these two things into the console, you can add a title to the input. You cant get and set class attributes with .class, instead, you use myInput.className

btnCreate.style.borderBottom = '5px solid deeppink';