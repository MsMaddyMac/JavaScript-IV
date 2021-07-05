// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person{
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstuctor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}

const amya = new Instructor({
    name: 'Amya',
    location: 'Massachusetts',
    age: 21,
    favLanguage: 'CSS',
    specialty: 'Web Dev',
    catchPhrase: `Don't forget the homies.`
});

const benny = new Instructor({
    name: 'Benny',
    location: 'Massachusetts',
    age: 38,
    favLanguage: 'JavaScript',
    specialty: 'UX',
    catchPhrase: `It's all good.`
});

const des = new Student({
    name: 'Des',
    age: 18,
    location: 'Massachusetts',
    previousBackground: 'High School student',
    className: 'Web24',
    favSubjects: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
});

const zac = new Student({
    name: 'Zac',
    age: 27,
    location: 'Wyoming',
    previousBackground: 'I.T.',
    className: 'Web24',
    favSubjects: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
});

const leslie = new ProjectManager({
    name: 'Leslie',
    age: 28,
    location: 'New York',
    gradClassName: 'Web18',
    favInstructor: 'Brit'
});

const kurt = new ProjectManager({
    name: 'Kurt',
    age: 37,
    location: 'New Jersey',
    gradClassName: 'UX8',
    favInstructor: 'Haynes'
})

console.log(amya.demo("Classes"));
console.log(amya.grade("Des", "javascript"));
console.log(des.listsSubjects());
console.log(des.PRAssignment("Computer Science"));
console.log(zac.sprintChallenge("Preprocessing II"));
console.log(kurt.standUp("Web24"))
console.log(leslie.debugsCode("Zac", 'CSS'));
console.log(benny.speak());