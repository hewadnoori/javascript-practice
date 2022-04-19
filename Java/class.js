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

const ernie = new Pet('dog', 1, 'pug');
const vera = new Pet('dog', 8, 'border collie');

console.log(ernie);
console.log(vera);