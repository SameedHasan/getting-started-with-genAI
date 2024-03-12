// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var Student = /** @class */ (function () {
    function Student(name, age, roll_no) {
        this.name = name;
        this.age = age;
        this.roll_no = roll_no;
    }
    Student.prototype.printStudentInfo = function () {
        console.log("Student Name: ".concat(this.name, ", Age: ").concat(this.age, ", Roll No: ").concat(this.roll_no));
    };
    return Student;
}());
var student1 = new Student("Syed Sameed Hasan", 23, 1);
var student2 = new Student("Afaq Haider", 21, 2);
var student3 = new Student("Umer Gulzar", 24, 3);
student1.printStudentInfo();
student2.printStudentInfo();
student3.printStudentInfo();
