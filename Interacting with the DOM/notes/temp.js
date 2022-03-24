function sayHi() {
    console.log("Hello")
}
function hiAndBye(func) {
    func()
    console.log('Bye')
}
hiAndBye(sayHi);

//you can also run the function directly into hiAndBye
//hiAndBye(() => { //this runs an anonymous function into a function
//console.log("Greeting");
//})