class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, classNum) {
        super(name, age);
        this.classNum = classNum;
    }

    introduce() {
        return `${super.introduce()} I am a Student. I am at Class ${this.classNum}`
    }
}

class Teacher extends Person {
    constructor(name, age, classNum) {
        super(name, age);
        this.classNum = classNum;
    }

    introduce() {
        const appendStr = !!this.classNum ? `I teach Class ${this.classNum}` : `I teach No Class`;
        return `${super.introduce()} I am a Teacher. ${appendStr}`
    }
}

class Worker extends Person {
    constructor(name, age) {
        super(name, age);
    }

    introduce() {
        return `${super.introduce()} I have a job.`
    }
}

console.log(new Student('Tom', 21, 2).introduce());
console.log(new Worker('Tom', 21).introduce());
console.log(new Teacher('Mary', 21, 2).introduce());
console.log(new Teacher('Jim', 45).introduce());
