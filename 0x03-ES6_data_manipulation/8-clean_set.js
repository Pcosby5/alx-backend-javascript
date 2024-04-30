/**
 * Returns a string of all the set values that start with a specific string (startString).
 *
 * @param {Set} set - The set to filter values from.
 * @param {String} startString - The string to filter values with.
 * @returns {String} A string containing all values
 * of the set that start with the startString, separated by '-'.
 */
export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  return filteredValues.join('-').substring(startString.length);
}
