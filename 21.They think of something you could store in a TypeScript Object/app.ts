// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
class Student {
  constructor(
    public name: string,
    public age: number,
    public roll_no: number
  ) {}
  printStudentInfo(): void {
    console.log(
      `Student Name: ${this.name}, Age: ${this.age}, Roll No: ${this.roll_no}`
    );
  }
}

let student1: Student = new Student("Syed Sameed Hasan", 23, 1);
let student2: Student = new Student("Afaq Haider", 21, 2);
let student3: Student = new Student("Umer Gulzar", 24, 3);

student1.printStudentInfo();
student2.printStudentInfo();
student3.printStudentInfo();
