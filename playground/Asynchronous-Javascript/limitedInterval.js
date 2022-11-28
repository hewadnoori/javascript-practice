// Add code here
//function limitedinterval with parameters, callback, wait, and limit in order. 
    //run callback once every wait miliseconds, up to limit miliseconds and then stop
    //loop through array that runs till limit is larger than wait
function limitedInterval(callback, wait, limit){
    for (let i = wait; i < limit; i += wait){
        setTimeout(() => {
            callback();
        }, i);
    }
}

// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
