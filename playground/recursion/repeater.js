console.log('Hello, world!');
let string = ''
let count = 0
// function repeater(char) {
//     //let string - to save string changes
//     //make a function that repeats/recursion until it makes a character repeat 5 times
//         //return that string
//     if (count >= 5){
//         count = 0;
//         let finalString = string;
//         string = '';
//         return finalString
//     }
//     count += 1
//     string += char
//     return repeater(char)
    
// }
//better way
function repeater(char){
    if(char.length === 5){
        return char
    }

    return repeater(char + char[0]);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));