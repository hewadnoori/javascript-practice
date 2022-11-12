// ADD CODE HERE
//function countBy - array and callback, 
    //returns an object so make one 
    //iterate through array and callback on each element
    //key of object = return from callback, value = number of times that particular return value was returned.
function countBy(array, callback){
    let obj = {};
    let oddNums = 0;
    let evenNums = 0;
    array.forEach(element => {
        if (callback(element) === "odd"){
            oddNums += 1
            obj[callback(element)] = oddNums;
        }  
        if (callback(element) === "even"){
            evenNums += 1
            obj[callback(element)] = evenNums;
        }    
    });
    



    return obj;
}


// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}

const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
