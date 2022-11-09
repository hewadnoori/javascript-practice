// ADD CODE HERE
//function multiMap that accepts two arrays, array of vals, array of callbacks
//return an object - keys are elements in array of vals, values are arrays from outputs of callbacks.
function multiMap(valArray, callArray){
    let obj = {};
    valArray.forEach(element => {
        let newArray = [];
        
        callArray.forEach(el => {
            newArray.push((el(element)))
        });
        
        obj[element] = newArray

    });
    console.log(obj)


    return obj;
}
// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }