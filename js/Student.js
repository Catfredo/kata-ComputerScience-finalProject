class Student {
  static countStudents = 0;
  constructor(name, lastName, age) {
    this._id = ++Student.countStudents;
    this._name = name;
    this._lastName = lastName;
    this._age = age;
    this._grade = null;
  }
  get alumno() {
    return `ID: ${this._id} Nombre: ${this._name} ${this._lastName}, edad: ${this._age} calificacion: ${this._grade} `;
  }
  set grade(grade) {
    this._grade = grade;
  }
  addclasses(clase = ""){
    classList.push(clase);
  }
}

// let student = new Student("Luis", "Gomez", 15);
// console.log(student.alumno);

// student.grade = "A";

// console.log(student.alumno);
