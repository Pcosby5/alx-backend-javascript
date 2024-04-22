/**
 * Returns an array with two boolean values based on the input parameter.
 * @param {boolean} trueOrFalse - Input parameter.
 * @returns {Array} - An array containing two boolean values.
 */
// export default function taskBlock(trueOrFalse) {
//   let task = false;
//   let task2 = true;

//   if (trueOrFalse) {
//     task = true; // Removed 'let' to modify the outer scope variable
//     task2 = false; // Removed 'let' to modify the outer scope variable
//   }

//   return [task, task2];
// }

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
