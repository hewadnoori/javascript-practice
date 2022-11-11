// ADD CODE HERE
//create function prioritize - accepts array and callback
    //callback will return either true or false. 
    //iterate through array and apply callback to each element
        //return new array 
function prioritize(array, callback){
    let newShows = [];
    array.forEach(element => {
        if(callback(element)){
            newShows.unshift(element);
        }    
        else{
            newShows.push(element)
        }
    });
    console.log(array)
    return newShows
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']