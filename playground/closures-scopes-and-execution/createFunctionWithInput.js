// ADD CODE HERE
//function createFunctionWithInput - accepts input
    //returns a function
    //called function should return input passed to createfunctionwithinput
function createFunctionWithInput(input){
    function outFunction(){
        return input
    }
    return outFunction
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'