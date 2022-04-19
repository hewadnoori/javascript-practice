/*focusing on storing and accessing related data
Key: value pairs. key = name of variable, value = value of said variable. 
An object is a single item that holds multiple variables.
*/
const person = {
    name: 'Edward',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['Javascript', 'Html', 'CSS'],
    bark: function () {
        console.log('Woof!');
    }
};
console.log(person.name);
console.log(person.city);
person.bark();
console.log(person['age']);
console.log(person['isStudent']);
person['bark']();
//You can add variables into the object and you can also perform math on properties that are set to numeric values.
person.nickname = 'Duke';
const message = `Hi, I'm ${person.name}. I live in ${person.city}. People call me ${person.nickname}. My age is ${person.age + 1}. I have ${person.skills.length} skills: ${person.skills.join(', ')}.`;
console.log(message);
//for in loop is used for objects. Key is just a variable that holds all of the key values. The only way to access those values is by using person[key]
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
};
//The Object.keys() method returns an array containing the property names (or keys) of an object.
const personProps = Object.keys(person);
console.log(personProps);

//To check the length of an object
console.log(Object.keys(person).length);  //6

//The Object.values() method returns an array of a given object's property values, in the same order as provided by a for...in loop.
const personVals = Object.values(person);
console.log(personVals);

// You can use the spread operator (...) to copy key/value pairs from one object to another.
const name = {
    firstName: 'Reggie',
    lastName: 'Williams',
};

const role = {
    title: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true,
};
// merge `name` and `role` into a `person` object
const people = {
    ...name,
    ...role
};

console.log(people);

//JavaScript Class Syntax
//since dog is a common value, we can make a class
const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function () {
        console.log('Woof!');
    }
}

const vera = {
    animal: 'dog',
    age: 8,
    breed: 'Border Collie',
    bark: function () {
        console.log('Woof!');
    }
}

const scofield = {
    animal: 'dog',
    age: 6,
    breed: 'Doberman',
    bark: function () {
        console.log('Woof!');
    }
}

const edel = {
    animal: 'dog',
    age: 7,
    breed: 'German Shorthaired Pointer',
    bark: function () {
        console.log('Woof!');
    }
}
//a class is like a blueprint
//capitalizing the first letter of a class name in its declaration is a common convention in programming
class Pet {
    //a constructor method is like a factory
    //add a constructor method which will outline the properties that your class will have
    constructor(animal, age, breed) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
    }
}

