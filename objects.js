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
};
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
console.log(Object.keys(person).length);  
