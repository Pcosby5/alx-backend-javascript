/**
 * Appends a specified string to each value in an array.
 * @param {Array} array - The input array.
 * @param {string} appendString - The string to append to each value.
 * @returns {Array} - A new array with the modified values.
 */
export default function appendToEachArrayValue(array, appendString) {
  // Create a new array to store the modified values
  const newArray = [];

  // Iterate through each value in the input array using a for...of loop
  for (const value of array) {
    // Append the specified string to the current value and push it into the new array
    newArray.push(appendString + value);
  }

  // Return the new array containing the modified values
  return newArray;
}
