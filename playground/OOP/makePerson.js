function makePerson(name, age) {
	let object = {}
    object.name = name
    object.age = age
    return object
}

const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24