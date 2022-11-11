// ADD CODE HERE
//create function majority, that accepts array and callback. 
    //callback returns true or false
    //iterate through array and perform a callback on each element until majority of return values are true
        //if number of true vals == false vals, return false
function majority(array, callback){
    
    const oddNum = array.filter((num)=> callback(num));
    console.log(oddNum.length);
    const evenNum = array.filter((num)=> !callback(num));
    console.log(evenNum.length)
    if (oddNum.length > evenNum.length){
        return true
    }
    else{
        return false
    }
}
// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false