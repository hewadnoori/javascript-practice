// ADD CODE HERE

//const intersection = arr => arr.reduce((a, e) => [...a, ...e], [])
function intersection(arr){
 let answer = [];
 console.log(answer)
  let array = [...arr[0], ...arr[1], ...arr[2]]
  for(let i = 0; i < array.length; i++){
   answer.push(array.reduce((dup, num)=>{
     
   }, []));
  }
 
    
  return answer;
}
function duplicates(current, next){
 if (current == next){
  return arrNum;
 }
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]