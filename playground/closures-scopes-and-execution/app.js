// ADD CODE HERE
//function censor accepts arguements =  none
    //string object
    //return function (...args)
        //if two strings - return will hold the two strings as pair for future
        //if one string is given, return will return the same string except all instances of first string replaced by second string
function censor(){
    let change = {};
    
    return function(...args){
        if (args.length > 1){
            change[args[0]] = args[1];
            console.log(change)
            return;
        }
        else{
            let newString = args[0]
            for (const property in change){
               newString = (newString.replace(property, change[property]));
            }
            return newString;
        }
    }
}


// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'