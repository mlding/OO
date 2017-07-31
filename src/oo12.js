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
        if (!this.isIn(studentInstance)) {
            return 'It is not one of us';
        }
        this.leader = studentInstance;
        return 'success';
    }

    appendMember(studentInstance) {
        studentInstance.klass = this;
        notifyEventListener("EventType", student);
    }

    notifyEventListener(EventType, EventObject){
      eventListeners.send(EventType,EventObject);
    }

    isIn(studentInstance) {
        return studentInstance.klass && studentInstance.klass.classId === this.classId;
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

    studnetJoinedClass(){
      welcomeStudentJoinClass
      notifyLeader
    }
    welcomeStudentJoinClass(studentInstance) {
        if (!studentInstance.klass || !this.klassList) {
            return '';
        }
        let teacherPrintedStr = '';
        const classId = studentInstance.klass.classId;
        const filteredLeaderClass = this.klassList.filter(klass => {
            return klass.leader.id = studentInstance.id;
        });
        if (filteredLeaderClass.length > 0) {
            teacherPrintedStr = `I am ${this.name}. I know ${studentInstance.name} become Leader of Class ${classId}`;
        } else {
            teacherPrintedStr = `I am ${this.name}. I know ${studentInstance.name} has joined Class ${classId}`;
        }
        return teacherPrintedStr;
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

console.log(teacherMary.welcomeStudentJoinClass(stuInClassOne));
console.log(teacherMary.welcomeStudentJoinClass(stuTom));
console.log(teacherMary.welcomeStudentJoinClass(stuJenkins));

console.log(teacherJim.welcomeStudentJoinClass(stuInClassOne));
console.log(teacherJim.welcomeStudentJoinClass(stuTom));
console.log(teacherJim.welcomeStudentJoinClass(stuJenkins));
