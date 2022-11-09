// ADD CODE HERE
function objOfMatches(arr1, arr2, uppercaser ){
    let upperArray = [];
    let objMatches = {};
    arr1.forEach(element => { //for each element, use the callback function uppercaser to change it to uppercase and push into upper array
        upperArray.push(uppercaser(element));
    });
    for (let i = 0; i < arr1.length; i++){ 
        if (upperArray[i] === arr2[i]){ //loop through both arrays according to index and match each array by their indexes, if the match
            objMatches[arr1[i]] = arr2[i]//then add them to the object
        }
    }
    return objMatches;

}
// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }