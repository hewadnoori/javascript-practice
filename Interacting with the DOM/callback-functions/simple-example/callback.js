// function sayHello() {
//     console.log('Hello');
// }
//this function can also be written as an anonymous function
const sayHello = function () {
    console.log('Hello');
}
function executeCallback(callback) {
    callback();
}
executeCallback(sayHello);