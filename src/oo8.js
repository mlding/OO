class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}

class Klass {
    constructor(classId) {
        this.classId = classId;
    }
}

class Student extends Person {
    constructor(name, age, klassInstance) {
        super(name, age);
        this.klass = klassInstance;
    }

    introduce() {
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.classId}`
    }
}

class Teacher extends Person {
    constructor(name, age, klassInstance) {
        super(name, age);
        this.klass = klassInstance;
    }

    introduce() {
        const klass = this.klass;
        const appendStr = !!klass ? `I teach Class ${klass.classId}` : `I teach No Class`;
        return `${super.introduce()} I am a Teacher. ${appendStr}`
    }

    introduceWith(studentInstance) {
        const appendStr = studentInstance.klass.classId === this.klass.classId ?
            `I teach ${studentInstance.name}` :
            `I don't teach ${studentInstance.name}`
        return `${super.introduce()} I am a Teacher. ${appendStr}`
    }
}

const classOne = new Klass(1);
const classTwo = new Klass(2);
const stuTom = new Student('Tom', 21, classTwo);
console.log(stuTom.introduce());

console.log(new Teacher('Mary', 21, classTwo).introduce());
console.log(new Teacher('Jim', 45).introduce());

console.log(new Teacher('Mary', 21, classTwo).introduceWith(stuTom));
console.log(new Teacher('James', 25, classOne).introduceWith(stuTom));
