//this is an array
const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
//to access values in an array, you use planets[0] = 'Mercury' since arrays start with 0.
console.log(planets[0]);
console.log(planets[1]);
console.log(planets[3]);
//You can also use planets.length in the console of chrome to see the number of items in an array
const instruments = ['piano', 'drums', 'trumpet'];
//this adds elements to the end of the array
instruments.push('guitar', 'violin', 'triangle');
//this adds elements to the beginning of the array
instruments.unshift('cowbell', 'tuba');
//this removes elements from the front of an array
instruments.shift();
//this removes elements from the end of the array
instruments.pop();

//use the spread operator (...) to copy one array into another
const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];
console.log(burger);
//if you pop, shift or alter the burger array in any way, it will not change the middle array since we just made
//a copy if the middle array in the burger array. The same goes for affecting the middle array.

const numbers = [10, 20, 30, 40];
//this will produce a NaN error because it sees an array as not a number
console.log(Math.max(numbers));
//this is the correct way of finding the max number in the array after the whole array is copied into the min function.
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//using a for loop with an array
const playlist = [
    'So What',
    'Respect',
    'What a Wonderful World',
    'At Last',
    'Three Little Birds',
    'The Way You Look Tonight',
    'Cool Song'
];

function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}
console.log(createListItems(playlist));
document.querySelector('main').innerHTML = `
    <ol>
        ${createListItems(playlist)}
    </ol>
`;
//this will join all of the items within a array and insert whatever arguement you gave. If you just want a little bit of
//space in between each ones, you use " ".
console.log(playlist.join(", "));
//this checks if the value given is within the array. If it is, it returns true. if not, it returns false.
console.log(playlist.includes('So What'));//returns true because this string is within the array
//this returns the index or position of an element in an array. If isn't in the array, it will return -1.
console.log(playlist.indexOf('At Last'));// this will return 3 bacause it is the 4th item in the array
