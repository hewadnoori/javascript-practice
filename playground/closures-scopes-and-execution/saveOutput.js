// ADD CODE HERE
//function saveOutput accepts two arguments; callback(...args if multiple) and string
    //object that saves outputs
    //return a function 
        //function should return callback except for when password string is passed in as arguement
            //string case returns an object with prev passed in args as keys and outputs as values. 
function saveOutput(callback, password){
    let outputs = {};
    return function(input){
        if (input === password){
            return outputs
        }
        else{
            outputs[input] = callback(input)
            return callback(input)
        }
    }
}


// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }