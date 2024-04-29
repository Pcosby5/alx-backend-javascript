// 2-get_students_by_loc.js
// This file defines a function that filters and returns students based
// on their location.
// It uses the Array.prototype.filter method to achieve this.

/**
 * getStudentsByLocation - filters an array of student objects by location.
 *
 * @param {Array} students An array of student objects.
 * @param {string} city The city to filter the students by.
 * @return {Array} An array of student objects who are located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
