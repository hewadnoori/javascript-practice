// Add code here
//function runInOrder with args; array of funcs, array of nums representing times in milliseconds
//should iterate through first array with a settimout that has a delay that is the second array
function runInOrder(arrCallbacks, arrDelays){
    let Delay = 0;
    for (let i = 0; i < arrCallbacks.length; i++){
        let callback = arrCallbacks[i]
        Delay += arrDelays[i]
        setTimeout(() => {
            callback();
        }, Delay);
    }
}


/* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
