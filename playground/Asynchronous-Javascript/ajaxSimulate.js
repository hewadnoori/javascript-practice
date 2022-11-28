let dataReceived;

function ajaxSimulate(id, callback) {
    const database = ['Aaron', 'Barbara', 'Chris'];
    // Add code here
    //settimout to run a function that will pass the database[id] to the callback at 0ms
    setTimeout(() => {
        callback(database[id]);
    }, 0);

}

// Also add code here
//second function called storeData with parameter data and assigns it the the dataReceived var
//invoke ajaxSimulate func with 1 and the storeData function as callback
// console.log dataReceived 
//copy paste the console.log in the correct place that would log the info we need.


function storeData(data){
    dataReceived = data;
    return console.log(dataReceived)
}

ajaxSimulate(1, storeData)
