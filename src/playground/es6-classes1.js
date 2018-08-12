

class Person {
    constructor(name = `User`, age = 0) {
        this.name = name,
        this.age = age
    }
    getGreeting() {
        return `Hello, I'm ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor(name, age, major, gradDate) {
        super(name, age);
        this.major = major,
        this.gradDate = gradDate
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation

    }
    hasHomeLocation() {
       return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()){
            greeting += ` I am visiting from ${this.homeLocation}.`
        };

        return greeting;
    }
}

const vod = new Student(`Devodriq`, 24, `Mechanical Engineerng`, 2016);
const someGuy = new Traveler(`Dev`,24,`Georgia`);
console.log(someGuy.getGreeting());