// ADD CODE HERE
//function delay with two arguments, callback and waitTime
    //return function waits for the specified amount of time before executing
function delay(callback, waitTime){
  
    let count = 0;
    return function(){
        return setTimeout(() => callback(count), waitTime)
    }
}
// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second