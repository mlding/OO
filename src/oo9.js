class Person {
    constructor(id, name, age) {
        this.id = id;
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

    assignLeader(studentInstance) {
        this.leader = studentInstance;
    }
}

class Student extends Person {
    constructor(id, name, age, klassInstance) {
        super(id, name, age);
        this.klass = klassInstance;
    }

    introduce() {
        const appendStr = this.klass.leader.id === this.id ?
            `I am Leader of Class ${this.klass.classId}` :
            `I am at Class ${this.klass.classId}`;
        return `${super.introduce()} I am a Student. ${appendStr}`
    }
}

class Teacher extends Person {
    constructor(id, name, age, klassInstance) {
        super(id, name, age);
        this.klass = klassInstance;
    }

    introduce() {
        const klass = this.klass;
        const appendStr = !!klass ? `I teach Class ${klass.classId}` : `I teach No Class`;
        return `${super.introduce()} I am a Teacher. ${appendStr}`
    }
}

const classOne = new Klass(1);
const classTwo = new Klass(2);

const stuInClassOne = new Student(1, 'stuInClassOne', 23, classOne);
const stuJenkins = new Student(2, 'jenkins', 23, classTwo);
const stuTom = new Student(3, 'Tom', 21, classTwo);
classOne.assignLeader(stuInClassOne);
classTwo.assignLeader(stuTom);

console.log(stuInClassOne.introduce());
console.log(stuTom.introduce());
console.log(stuJenkins.introduce());

console.log(new Teacher(1, 'Mary', 21, classTwo).introduce());
console.log(new Teacher(2, 'Jim', 45).introduce());
