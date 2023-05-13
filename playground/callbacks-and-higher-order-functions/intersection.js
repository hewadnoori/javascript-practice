function intersection (arrays){
  let acc = arrays.pop() //last array of the three[1, 10, 15, 5, 20]

  
  while (arrays.length){ // loops while there are arrays 
    const current = arrays.pop();// is [15, 88, 1, 5, 7] and then [5, 10, 15, 20] on the second go around
    console.log(current)
    console.log(arrays)
    const newArr = []; //initializes a var to hold the matching numbers and then emptys the old newArr after each go
    
    current.forEach((element)=>{
      if (acc.includes(element)) newArr.push(element); //if the element exists in the accumulator array, then push it to the new array. first time acc is [1, 10, 15, 5, 20] and second time, accumulator is [5, 1, 15]; so first time its checking if any number in current is in [1, 10, 15, 5, 20] and then if any number is in [5, 1, 15]
    })
    acc = newArr // becomes [15,1,5] after comparing arr3 and arr2 similar values and then [15,5] after comparing arr2 and arr1
    console.log(acc);

  }
return acc
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
