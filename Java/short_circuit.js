console.log(3 === 3 && 'cow' && 'chicken'); // this would return chicken because all operands are true.
console.log(3 === 3 && false && 'chicken'); //this would return false and never consider chicken because it processes from left to right

function countToFive(start = 1) { //the start = 1 is the default value
    for (var i = start; i <= 5; i++) {
        console.log(i);
    }
}

countToFive(2);