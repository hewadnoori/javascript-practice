// const body = document.body;//this references the body element and assigns it to a variable

// body.addEventListener('click', () => { // called the addeventlistener on the body, instructing the browser to do something when its clicked.
//     body.innerHTML = '<h1>Hello, world!</h1>'; //told the browser to manipulate the body element by changing its inner HTML for every click event.
// });                       
const headline = document.getElementById('headline');

headline.style.border = 'solid 2px red';

const btn_main = document.getElementById('btn-main');

btn_main.addEventListener('click', () => {
    headline.style.border = 'solid 4px black'
})

//if you want to select multiple elements by tag names.
document.getElementsByTagName('li');

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