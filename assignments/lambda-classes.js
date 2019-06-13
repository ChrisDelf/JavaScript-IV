// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    return 'Hello my name is ' + this.name + " I'm from " + this.location;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return 'Today we are learning about ' + subject;
  }

  grade(student, subject, grade) {
    return (
      student + ' Has received a ' + grade + ' on their ' + subject + 'test.'
    );
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listOfSubjects() {
    this.favSubjects.map(item => console.log(item));
  }
  PRAssignment(subject) {
    return this.name + ' has summitted the ' + subject + ' challenge';
  }

  sprintChallenge(subject) {
    return this.name + ' has started the sprint challenge on ' + subject;
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    return this.name + ' announces to ' + channel + ' @Channel standy time!';
  }
  debugCode(student, subject) {
    return this.name + ' debugs ' + student + "'s code on " + subject;
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const bob = new Student({
  name: 'Bob',
  location: 'Bodrock',
  age: 23,
  favLanguage: 'JavaScript',
  specialty: 'All-end',
  catchPhrase: `Don't forget the homies`,
  previousBackground: 'Builder',
  className: 'Web 21',
  favSubjects: [' Tacos ', ' Computers ', ' Birds']
});

const joe = new ProjectManager({
  name: 'Joe',
  location: 'The Moon',
  age: 2382395,
  favLanguage: 'Super JavaScript',
  specialty: 'Infinity-end',
  catchPhrase: `Don't forget the homies and bromies`,
  gradClassName: 'CS0',
  favInstructor: 'fred'
});

console.log(fred.speak());

console.log(fred.demo('JavaScript'));

console.log(fred.grade(bob.name, ' JavaScript ', ' 9 cheeses and a wine '));

bob.listOfSubjects();

console.log(bob.PRAssignment('JavaScript'));

console.log(bob.sprintChallenge('JavaScript'));

console.log(joe.standUp('Web 21'));

console.log(joe.debugCode(bob.name, 'JavaScript'));
