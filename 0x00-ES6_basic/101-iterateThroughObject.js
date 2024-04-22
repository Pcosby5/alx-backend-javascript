/**
 * Takes an iterator that goes through employees and returns a string of
 * all names separated by a vertical bar.
 * @param {Iterator} reportWithIterator - Iterator over employee names.
 * @returns {string} A string representation of all employee names separated by '|'.
 */
export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold all names.
  const result = [];

  // Loop through the iterator and push each value into the result array.
  for (const name of reportWithIterator) {
    result.push(name);
  }

  // Join all names using the '|' as a separator and return the result.
  return result.join(' | ');
}
