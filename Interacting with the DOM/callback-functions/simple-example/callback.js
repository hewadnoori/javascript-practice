// function sayHello() {
//     console.log('Hello');
// }
//this function can also be written as an anonymous function
// function () {
//     console.log('Hello');
// }
function executeCallback(callback) {
    callback();
}
executeCallback(function () {
    console.log('Hello');
});
executeCallback(() => {
    console.log('Hello');
});
//if there is a single line of code, you cna remove the curly braces.
executeCallback(() => console.log('Hello'));
