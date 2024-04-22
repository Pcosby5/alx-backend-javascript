/**
 * Creates a report object with a list of all employees grouped by department
 * and a method to get the number of departments.
 * @param {Object} employeesList - An object containing departments and
 * their associated employees.
 * @returns {Object} A report object with detailed department and employee
 * information, and a method to count departments.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(deptObject) {
      return Object.keys(deptObject).length;
    },
  };
}
