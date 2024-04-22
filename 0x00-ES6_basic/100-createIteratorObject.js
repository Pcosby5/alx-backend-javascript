/**
 * Creates an iterator that goes through every employee in every department
 * within the given report object.
 * @param {Object} report - The report object containing all employees categorized by department.
 * @returns {Iterator} An iterator that yields each employee from every department.
 */
export default function createIteratorObject(report) {
  // Fetch all employees from each department into a single array.
  const allEmployees = Object.values(report.allEmployees).flat();

  // Return the iterator for the array of all employees.
  return allEmployees[Symbol.iterator]();
}
