function arrToObj(array, callback) {
    let obj = {};
    array.forEach(element=>{
        console.log(element)
        obj[element] = callback(element);
    })
    return obj
  //return object that has elements from array as keys, and outputs from callback as values
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }