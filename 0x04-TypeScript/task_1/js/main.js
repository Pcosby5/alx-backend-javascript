// /**
//  * Define the Teacher interface
//  * - firstName: string
//  * - lastName: string
//  * - fullTimeEmployee: boolean
//  * - yearsOfExperience?: number (optional)
//  * - location: string
//  * - [key: string]: any (allow any additional attribute)
//  */
// interface Teacher {
//   firstName: string;
//   lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any; // Allow any additional attribute
// }
// Define the StudentClass class
var StudentClass = /** @class */ (function () {
    function StudentClass(student) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Create an instance of the StudentClass
var student1 = {
    firstName: 'John',
    lastName: 'Doe'
};
var studentInstance = new StudentClass(student1);
// Test the methods
console.log(studentInstance.workOnHomework()); // Output: Currently working
console.log(studentInstance.displayName()); // Output: John
