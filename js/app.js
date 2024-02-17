// Arrays class-Student

const studentsList = [
  new Student("Luis", "Gomez", 24),
  new Student("Romina", "Arenas", 23),
];

const classList = [new Clase("Programación I")];

// Student Methods

// <----- Secction Global ----->

let loadApp = () => {
  loadStudents();
};

const loadStudents = () => {
  studentsHTML = "";
  for (let student of studentsList) {
    studentsHTML += createStudent(student);
  }
  document.getElementById("list-students").innerHTML = studentsHTML;
};

const createStudent = (student) => {
  let studentHTML = `
  <div onclick="chargeData(${student._id})" class="student-container">${student._name} ${student._lastName}
  </div>
  `;
  return studentHTML;
};

let removeElements = () => {
  let formStudent = document.getElementById("left-container");
  formStudent.innerHTML = "";
};

let chargeData = (id) => {
  for (let student of studentsList) {
    if (student._id === id) {
      let StudentData = `<div class="student-card">
    <div class="image-student">
        <ion-icon name="person-circle-outline" ></ion-icon>
    </div>
    <div class="student-data">
        <h3>ID:</h3>
        <p class="student-data-personal"> ${student._id} </p>
        <h3>Nombre:</h3>
        <p class="student-data-personal"> ${student._name} ${student._lastName}</p>
        <h3>Edad:</h3>
        <p class="student-data-personal"> ${student._age}</p>
    </div>
    <div class="student-grades" id="student-grades">
    <div class="class-container">
    <p>Clase <span>10</span> <span>Estado: APROBADO</span></p>
    </div>
    
    
    </div>
    <input type="text" id="classInput" placeholder="Nombre de la clase">
    <button onclick="assignClasses(${student._id})">Agregar</button>
    <button class="btn-deleteStudent" id="btn-deleteStudent${student._id}" onclick="deleteStudent(${student._id})">Eliminar estudiante</button>`;
      document.getElementById("left-container").innerHTML = StudentData;
    }
  }
  loadClasses();
};

let deleteStudent = (id) => {
  for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i]._id === id) {
      studentsList.splice(i, 1);

      break;
    }
  }

  document.getElementById("left-container").innerHTML = "";
  loadStudents();
};

// <-----  ----->

// <----- Secction Form ----->

let loadForm = () => {
  removeElements();

  let createForm = document.createElement("form");
  createForm.setAttribute("class", "form-student");
  createForm.setAttribute("id", "form-student");
  let leftContainer = document.querySelector(".left-container");
  leftContainer.appendChild(createForm);

  let formHtml = `
        <h2>Nombre</h2>
        <input type="text" id="name-input" required minlength="3" maxlength="15" placeholder="Introduce tu nombre">
        <h2>Apellido</h2>
        <input type="text" id="lastName-input" required minlength="5" maxlength="15" placeholder="Introduce tu Apellido">
        <h2>Año de Nacimiento</h2>
        <input type="number" id="year-input" required  placeholder="Introduce tu año de Nacimiento">
        <button type="submit">Enviar</button>
    `;
  document.getElementById("form-student").innerHTML = formHtml;

  createForm.addEventListener("submit", submitForm);
};

let addStudent = (name, lastName, yearOfBirth) => {
  let currentYear = new Date();
  yearOfBirth = currentYear.getFullYear() - yearOfBirth;
  console.log(yearOfBirth);
  let newStudent = new Student(name, lastName, yearOfBirth);
  studentsList.push(newStudent);
  console.log("Nuevo estudiante añadido:", newStudent);
};

let submitForm = (event) => {
  event.preventDefault();

  let name = document.getElementById("name-input").value;
  let lastName = document.getElementById("lastName-input").value;
  let yearOfBirth = document.getElementById("year-input").value;

  addStudent(name, lastName, parseInt(yearOfBirth));
  loadForm();
  loadStudents();
};
// seccion de clases

let loadClasses = () => {
  let classHTML = "";
  for (subject of classList) {
    classHTML += createClass(subject);
  }
  document.getElementById("student-grades").innerHTML = classHTML;
};

let createClass = (subject) => {
  let subjectHTML = `

    <div class="class-container">
        <p>${subject._nameClass} <span>calif: </span> <span>Estado: APROBADO</span></p>
    </div>
              
    `;
  return subjectHTML;
};

// Función para agregar clases a un estudiante:

let assignClasses = (studentId) => {
  const className = document.getElementById('classInput').value;

  const student = findStudentById(studentId);

  student.addclasses(new Clase(className));

  loadClasses();
};
const findStudentById = (studentId) => {
  return studentsList.find((student) => student._id === studentId);
};
