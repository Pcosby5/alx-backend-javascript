"use strict";
/**
 * Write an interface named Student that accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */
exports.__esModule = true;
exports.renderTable = void 0;
/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'UK'
};
var student2 = {
    firstName: 'Alex',
    lastName: 'Sanchez',
    age: 29,
    location: 'New York'
};
var studentsList = [
    student1,
    student2,
];
/**
 * - Using Vanilla Javascript, render a table and for each elements in the array,
 * append a new row to the table
 *
 * - Each row should contain the first name of the student and the location
 */
var renderTable = function (studentsList) {
    // create table tag
    var table = document.createElement('table');
    var headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
    for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
        var student = studentsList_1[_i];
        var studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.firstName, "</td>"));
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.location, "</td>"));
        table.insertAdjacentElement('beforeend', studentRow);
    }
    document.body.insertAdjacentElement('beforeend', table);
};
exports.renderTable = renderTable;
(0, exports.renderTable)(studentsList);
// document.addEventListener("DOMContentLoaded", function() {
//   // Define the Student interface
//   interface Student {
//     firstName: string;
//     lastName: string;
//     age: number;
//     location: string;
//   }
//   // Create two students
//   const student1: Student = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 20,
//     location: "New York"
//   };
//   const student2: Student = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 22,
//     location: "Los Angeles"
//   };
//   // Create an array of students
//   const studentsList: Student[] = [student1, student2];
//   // Render the table
//   // Select the table body element using its id
//   const tableBody = document.querySelector("#student-table tbody");
//   // Check if the table body element exists
//   if (tableBody) {
//     // Loop through the array of students
//     studentsList.forEach(student => {
//       // Create a new table row element
//       const row = document.createElement("tr");
//       // Create a new table cell element for the first name
//       const firstNameCell = document.createElement("td");
//       // Set the text content of the first name cell to the student's first name
//       firstNameCell.textContent = student.firstName;
//       // Create a new table cell element for the location
//       const locationCell = document.createElement("td");
//       // Set the text content of the location cell to the student's location
//       locationCell.textContent = student.location;
//       // Append the first name cell to the table row
//       row.appendChild(firstNameCell);
//       // Append the location cell to the table row
//       row.appendChild(locationCell);
//       // Append the table row to the table body
//       tableBody.appendChild(row);
//     });
//   }
// });
