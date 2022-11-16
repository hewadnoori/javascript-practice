// ADD CODE HERE
//function createFunction
    //create function
        //return hello world
    //return that function
function createFunction(){
    function helloWorld(){
       return 'hello world'
    }
    return helloWorld;
}

// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'