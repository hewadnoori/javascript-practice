// ADD CODE HERE
//function groupBy - accepts array and callback
    //make object and return it
    //use forEach loop to apply callback to each element in the array
        //key = return value of callback, value = array with all elements of that return val
function groupBy(array, callback){
    let obj = {};
    array.forEach(element => {
        
        if (!obj[callback(element)]){
            obj[callback(element)] = [element]
        }
        else if(obj[callback(element)]){
            obj[callback(element)].push(element)
        }
    });
    return obj;
}


// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }