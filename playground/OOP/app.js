let array = []
let string = "Hello"
let string2 = ""
for(let i = 0; i < string.length; i++){
    array.push(string[i].toLowerCase())
}

console.log(array.reverse())

array.forEach(element=>{
    string2 = string2 + element
})
console.log(string2)
let newStr = string.replaceAll(/[aeiouAEIOU]/g,"" ) //replaces all vowels

string.includes("H")

function addTwo(num){
    return num + 2
}

const onceFunc = once(addTwo)
console.log(onceFunc(4))
console.log(onceFunc(20))