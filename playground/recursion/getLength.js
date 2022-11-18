function getLength(array, length = 0) {
    if (array[0] === undefined){
        return length
    }
    ;
    length += 1
    array.pop()
    return getLength(array, length)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0