"use strict"

// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }
// constructor function
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
}

Student.prototype.removeSubject = function(subject) {
    this.subjects = this.subjects.filter(item => item !== subject)
}

const student1 = new Student(1, 'Reed');
const student2 = new Student(2, 'Doug');
const student3 = new Student(3, 'Chad');

student1.addSubject('Math');
student2.addSubject('Physics');
student3.addSubject('One');
student3.addSubject('Two');
student3.addSubject('Three');
console.log(student3.subjects);
student3.removeSubject('Two');
console.log(student3.subjects);
