class Clase{
    static countClass=0;
    constructor(nameClass){
        this._id = ++Clase.countClass;
        this._nameClass = nameClass;
    }

    addStudent(student){
        studentsList.push(student);
    }
    setGrade(student){
        student.setGrade();
    }
}



