// ADD CODE HERE
//function after , parameters = amountRepeated, callback 
function after(amountRepeated, callback){
    let count = 0;
    return function(...args){
        count += 1;
        if (count >= amountRepeated){
            return callback(...args);
        }
        
    }
}
const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed