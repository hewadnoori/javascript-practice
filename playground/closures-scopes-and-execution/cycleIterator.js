// ADD CODE HERE
//function cycleIterator accepts argument = array
    //have let count to keep track of how many times it was called
    //return function arguments = none
        //count += 1 every time its called and when it gets more than the amount of the array, it resets
        //return element of array based on the count
function cycleIterator(array){
    let count = 0;
    return function(){
        if(count >= array.length){
            count = 0;
            let position = count
            count += 1
            return array[position];
        }
        else{
            let position = count
            count += 1
            return array[position];
        }
        
    }
}


// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'