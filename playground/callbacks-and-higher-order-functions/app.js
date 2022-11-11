// ADD CODE HERE
//function countBy - array and callback, 
    //returns an object so make one 
    //iterate through array and callback on each element
    //key of object = return from callback, value = number of times that particular return value was returned.
function countBy(array, callback){
    obj = {};
    const oddNum = array.filter((num)=> callback(num));
    const evenNum = array.filter((num)=> !callback(num));
    console.log(oddNum);



    return obj;
}


// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}

const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
