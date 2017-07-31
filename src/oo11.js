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
        if (!studentInstance.klass || studentInstance.klass.classId !== this.classId) {
            return 'It is not one of us';
        }
        this.leader = studentInstance;
        return 'success';
    }

    appendMember(studentInstance) {
        studentInstance.klass = this;
    }

    isIn(studentInstance) {
        return studentInstance.klass.classId === this.classId;
    }
}

class Student extends Person {
    constructor(id, name, age, klassInstance) {
        super(id, name, age);
        this.klass = klassInstance;
    }

    introduce() {
        let appendStr = '';
        if (this.klass) {
            appendStr = this.klass && this.klass.leader && this.klass.leader.id === this.id ?
                `I am Leader of Class ${this.klass.classId}` :
                `I am at Class ${this.klass.classId}`;
        }
        return `${super.introduce()} I am a Student. ${appendStr}`
    }
}

class Teacher extends Person {
    constructor(id, name, age, klassInstanceList) {
        super(id, name, age);
        this.klassList = klassInstanceList;
    }

    introduce() {
        let appendStr = '';
        const klassList = this.klassList;
        if (klassList && klassList.length > 0) {
            const klassIdList = klassList.map(klass => {
                return klass.classId;
            });
            const klassIdStr = klassIdList.reduce((first, second) => {
                return first + second + ','
            }, '');
            const formattedKlassIdStr = klassIdStr.slice(0, klassIdStr.length - 1);
            appendStr = `I teach Class ${formattedKlassIdStr}`;
        } else {
            appendStr = `I teach No Class`;
        }

        return `${super.introduce()} I am a Teacher. ${appendStr}`
    }

    isTeaching(studentInstance) {
        const classId = studentInstance.klass.classId;
        if (!this.klassList) {
            return false;
        }
        const studentClassIncludedInList = this.klassList.filter(klass => {
            return klass.classId === classId;
        });

        return studentClassIncludedInList.length > 0;
    }
}

const classOne = new Klass(1);
const classTwo = new Klass(2);

const stuInClassOne = new Student(1, 'stuInClassOne', 23);
const stuTom = new Student(3, 'Tom', 21);
const stuJenkins = new Student(2, 'jenkins', 23, classTwo);

classOne.appendMember(stuInClassOne);
classTwo.appendMember(stuTom);
console.log(classOne.assignLeader(stuInClassOne));
console.log(classTwo.assignLeader(stuTom));

console.log(stuInClassOne.introduce());
console.log(stuTom.introduce());
console.log(stuJenkins.introduce());

const teacherMary = new Teacher(1, 'Mary', 21, [classOne, classTwo]);
const teacherJim = new Teacher(2, 'Jim', 45);
console.log(teacherMary.introduce());
console.log(teacherJim.introduce());

console.log(classOne.isIn(stuInClassOne));
console.log(classOne.isIn(stuTom));
console.log(classOne.isIn(stuJenkins));

console.log(teacherMary.isTeaching(stuInClassOne));
console.log(teacherMary.isTeaching(stuTom));
console.log(teacherMary.isTeaching(stuJenkins));

console.log(teacherJim.isTeaching(stuInClassOne));
console.log(teacherJim.isTeaching(stuTom));
console.log(teacherJim.isTeaching(stuJenkins));
