// ADD CODE HERE
//function dateStamp accepts arguements = callback
    //let time object
    //returns function(...args)
        //return object with a date key whose value is todays date, output is results of callback
function dateStamp(callback){
    //this is the complicated way of getting the date, where you would add fullDate to the time.date object property. 
     let time = {}
    // let daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // let monthsInYear = ["Jan]", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // // let date = new Date()
  
    // let week = date.getDay()
    // let day = date.getDate()
    // let month = date.getMonth()
    // let year = date.getFullYear()
    // let fullDate = [daysInWeek[week], monthsInYear[month], day, year].join(' ');
    // console.log(fullDate)
    return function(...args){
        time.date = new Date().toDateString(); //fullDate would be added here in the hard way.
        time.output = callback(...args)
        
        return time 
    }
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }