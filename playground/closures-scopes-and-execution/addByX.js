// ADD CODE HERE
//function addByX with input accepted
    //save input into let 
    //make new function that adds an input by x
    //return the function
function addByX(x){
    let addBy = x;
    function add(num){
        return addBy + num
    }
    return add
}


const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1))
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2))