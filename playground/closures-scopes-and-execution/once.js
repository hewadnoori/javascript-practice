// ADD CODE HERE
//function once accepts a callback
    //have counter to track amount of times function is called
    //have a var that saves the return statement of the callback once its run the first time
    //function that takes callback and returns it if counter is less than 1
    //else return var
    //return function
function once(callback){
    let prevResult = 0;
    
    function addOnce(num){
        
        if (prevResult == 0){
            prevResult = callback(num);
            return callback(num);
            
        }
        else{
           return prevResult;
        }
    } 
    return addOnce
}

    


const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7