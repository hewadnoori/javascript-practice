//a class is like a blueprint
//capitalizing the first letter of a class name in its declaration is a common convention in programming
class Pet {
    //a constructor method is like a factory
    //add a constructor method which will outline the properties that your class will have
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }
    //this is called getting
    get activity() {
        //this is a built in javascript object that gives us the time and date of today as a string. 
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20) {
            return 'playing';
        }
        else {
            return 'sleeping';
        }
    }
    get owner() {
        return this._owner;
    }
    //this is called setting
    set owner(owner) {
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }

    speak() {
        console.log(this.sound);
    }
}

class Owner {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    set phone(phone) {
        const phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized;
    }
    get phone() {
        return this._phone;
    }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

console.log(ernie);
console.log(vera);

ernie.speak();
vera.speak();
console.log(ernie.activity);
console.log(ernie);

ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555)555-5555';
console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);