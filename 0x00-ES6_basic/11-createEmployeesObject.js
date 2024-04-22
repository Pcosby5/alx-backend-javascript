/**
 * Creates a department object with its employees.
 * @param {string} departmentName - The department's name.
 * @param {Array<string>} employees - Employee names.
 * @returns {Object} An object with the department name as the key and employee array as the value.
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
