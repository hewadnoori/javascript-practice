const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Your order is ready, come and get it!');
        } else {
            reject(Error('oh no! There was a problem with your order.'));
        }


    }, 3000);
});
console.log(breakfastPromise);

breakfastPromise
    .then(val => console.log(val))//runs if the code is true, will console log the resolve code and switch the status to resolved
    .catch(err => console.log(err));//runs if the code is false, will console log the reject code and switch the status to rejected


function addFive(n) {
    return n + 5;
}
function double(n) {
    return n * 2;
}
function finalValue(nextValue) {
    console.log(`The final value is ${nextValue}`);
}

const mathPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve promise if 'value' is a number; otherwise, reject it
        if (typeof value === 'number') {
            resolve(value);
        } else {
            reject('You must specify a number as the value.')
        }
    }, 1000);
});

const value = 5;
mathPromise
    .then(addFive)
    .then(double)
    .then(addFive) // called twice
    .then(finalValue)
    .catch(err => console.log(err));

// The final value is 25

value = '5';
mathPromise
    .then(addFive)
    .then(double)
    .then(finalValue)
    .catch(err => console.log(err))

// You must specify a number as the value.