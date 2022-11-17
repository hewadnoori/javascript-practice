// ADD CODE HERE
//function defineFirstArg accepts two args; function(accept at least one arg so maybe use ...args) and arg,
    //return function(num)
        //invoke passed in function(passed in arguement)
function defineFirstArg(callback, ...arg){
    return function(...num){
        return callback(...arg, ...num)
    }
}


// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15