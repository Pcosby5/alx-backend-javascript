// // Define DirectorInterface interface
// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }
/**
 * Write a function named teachClass.
 * @param todayClass The class to teach.
 * @returns A string indicating the subject being taught.
 */
var teachClass = function (todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    else {
        throw new Error('Invalid class');
    }
};
// Test cases
console.log(teachClass('Math')); // Output: "Teaching Math"
console.log(teachClass('History')); // Output: "Teaching History"
