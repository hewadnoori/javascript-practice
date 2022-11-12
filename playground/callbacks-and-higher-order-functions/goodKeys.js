// ADD CODE HERE
//function goodkeys accepts object and callback
    //array of trues from callback
    //for each element - callback
        //return true or false in callback
        //add true to array
    //return array
function goodKeys(object, callback){
    let trueBirds = [];

    for (const property in object){
        console.log(object[property])
        if(callback(object[property])){
            trueBirds.push(property)
        }
    } 

    return trueBirds;
}
// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']