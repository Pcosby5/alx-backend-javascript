/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Write an interface named Student that accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'UK',
};
var student2 = {
    firstName: 'Alex',
    lastName: 'Sanchez',
    age: 29,
    location: 'New York',
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7QUNqRkE7Ozs7Ozs7R0FPRzs7O0FBU0g7OztHQUdHO0FBRUgsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFVBQVU7Q0FDckIsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFtQjtJQUNuQyxRQUFRO0lBQ1IsUUFBUTtDQUNULENBQUM7QUFHRjs7Ozs7R0FLRztBQUVJLElBQU0sV0FBVyxHQUFHLFVBQUMsWUFBNEI7SUFDdEQsbUJBQW1CO0lBQ25CLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWxELGlCQUFpQjtJQUNqQixPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRTdELEtBQXNCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO1FBQS9CLElBQU0sT0FBTztRQUNoQixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUMvQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLGNBQU8sT0FBTyxDQUFDLFNBQVMsVUFBTyxDQUFDLENBQUM7UUFDNUUsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxjQUFPLE9BQU8sQ0FBQyxRQUFRLFVBQU8sQ0FBQyxDQUFDO1FBQzNFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDdEQ7SUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBbEJZLG1CQUFXLGVBa0J2QjtBQUVELHVCQUFXLEVBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUIsNkRBQTZEO0FBQzdELG9DQUFvQztBQUNwQyx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLE1BQU07QUFFTiwyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBQ2hDLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLDJCQUEyQjtBQUMzQixPQUFPO0FBRVAsZ0NBQWdDO0FBQ2hDLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLDhCQUE4QjtBQUM5QixPQUFPO0FBRVAsbUNBQW1DO0FBQ25DLDBEQUEwRDtBQUUxRCx3QkFBd0I7QUFDeEIsa0RBQWtEO0FBQ2xELHNFQUFzRTtBQUV0RSw4Q0FBOEM7QUFDOUMscUJBQXFCO0FBQ3JCLDRDQUE0QztBQUM1Qyx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLGtEQUFrRDtBQUVsRCw4REFBOEQ7QUFDOUQsNERBQTREO0FBQzVELG1GQUFtRjtBQUNuRix1REFBdUQ7QUFFdkQsNERBQTREO0FBQzVELDJEQUEyRDtBQUMzRCwrRUFBK0U7QUFDL0UscURBQXFEO0FBRXJELHVEQUF1RDtBQUN2RCx3Q0FBd0M7QUFDeEMscURBQXFEO0FBQ3JELHVDQUF1QztBQUV2QyxrREFBa0Q7QUFDbEQsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVixNQUFNO0FBQ04sTUFBTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbi8qKlxuICogV3JpdGUgYW4gaW50ZXJmYWNlIG5hbWVkIFN0dWRlbnQgdGhhdCBhY2NlcHRzIHRoZVxuICogZm9sbG93aW5nIGVsZW1lbnRzOlxuICogLSBmaXJzdE5hbWUoc3RyaW5nKSxcbiAqIC0gbGFzdE5hbWUoc3RyaW5nKSxcbiAqIC0gYWdlKG51bWJlciksXG4gKiAtIGxvY2F0aW9uKHN0cmluZylcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZyxcbiAgbGFzdE5hbWU6IHN0cmluZyxcbiAgYWdlOiBudW1iZXIsXG4gIGxvY2F0aW9uOiBzdHJpbmcsXG59XG5cbi8qKlxuICogQ3JlYXRlIHR3byBzdHVkZW50cywgYW5kIGNyZWF0ZSBhbiBhcnJheSBuYW1lZCBzdHVkZW50c0xpc3RcbiAqIGNvbnRhaW5pbmcgdGhlIHR3byB2YXJpYWJsZXNcbiAqL1xuXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgYWdlOiAyNSxcbiAgbG9jYXRpb246ICdVSycsXG59O1xuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnQWxleCcsXG4gIGxhc3ROYW1lOiAnU2FuY2hleicsXG4gIGFnZTogMjksXG4gIGxvY2F0aW9uOiAnTmV3IFlvcmsnLFxufTtcblxuY29uc3Qgc3R1ZGVudHNMaXN0OiBBcnJheTxTdHVkZW50PiA9IFtcbiAgc3R1ZGVudDEsXG4gIHN0dWRlbnQyLFxuXTtcblxuXG4vKipcbiAqIC0gVXNpbmcgVmFuaWxsYSBKYXZhc2NyaXB0LCByZW5kZXIgYSB0YWJsZSBhbmQgZm9yIGVhY2ggZWxlbWVudHMgaW4gdGhlIGFycmF5LFxuICogYXBwZW5kIGEgbmV3IHJvdyB0byB0aGUgdGFibGVcbiAqXG4gKiAtIEVhY2ggcm93IHNob3VsZCBjb250YWluIHRoZSBmaXJzdCBuYW1lIG9mIHRoZSBzdHVkZW50IGFuZCB0aGUgbG9jYXRpb25cbiAqL1xuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFibGUgPSAoc3R1ZGVudHNMaXN0OiBBcnJheTxTdHVkZW50Pik6IHZvaWQgPT4gIHtcbiAgLy8gY3JlYXRlIHRhYmxlIHRhZ1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGNvbnN0IGhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICB0YWJsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGhlYWRSb3cpO1xuXG4gIC8vIGluc2VydCBoZWFkZXJzXG4gIGhlYWRSb3cuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHRoPkZpcnN0TmFtZTwvdGg+Jyk7XG4gIGhlYWRSb3cuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHRoPkxvY2F0aW9uPC90aD4nKTtcblxuICBmb3IgKGNvbnN0IHN0dWRlbnQgb2Ygc3R1ZGVudHNMaXN0KSB7XG4gICAgY29uc3Qgc3R1ZGVudFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICBzdHVkZW50Um93Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDx0ZD4ke3N0dWRlbnQuZmlyc3ROYW1lfTwvdGQ+YCk7XG4gICAgc3R1ZGVudFJvdy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8dGQ+JHtzdHVkZW50LmxvY2F0aW9ufTwvdGQ+YCk7XG4gICAgdGFibGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzdHVkZW50Um93KTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCB0YWJsZSk7XG59XG5cbnJlbmRlclRhYmxlKHN0dWRlbnRzTGlzdCk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbi8vICAgLy8gRGVmaW5lIHRoZSBTdHVkZW50IGludGVyZmFjZVxuLy8gICBpbnRlcmZhY2UgU3R1ZGVudCB7XG4vLyAgICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4vLyAgICAgbGFzdE5hbWU6IHN0cmluZztcbi8vICAgICBhZ2U6IG51bWJlcjtcbi8vICAgICBsb2NhdGlvbjogc3RyaW5nO1xuLy8gICB9XG5cbi8vICAgLy8gQ3JlYXRlIHR3byBzdHVkZW50c1xuLy8gICBjb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbi8vICAgICBmaXJzdE5hbWU6IFwiSm9oblwiLFxuLy8gICAgIGxhc3ROYW1lOiBcIkRvZVwiLFxuLy8gICAgIGFnZTogMjAsXG4vLyAgICAgbG9jYXRpb246IFwiTmV3IFlvcmtcIlxuLy8gICB9O1xuXG4vLyAgIGNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuLy8gICAgIGZpcnN0TmFtZTogXCJKYW5lXCIsXG4vLyAgICAgbGFzdE5hbWU6IFwiRG9lXCIsXG4vLyAgICAgYWdlOiAyMixcbi8vICAgICBsb2NhdGlvbjogXCJMb3MgQW5nZWxlc1wiXG4vLyAgIH07XG5cbi8vICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHN0dWRlbnRzXG4vLyAgIGNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbi8vICAgLy8gUmVuZGVyIHRoZSB0YWJsZVxuLy8gICAvLyBTZWxlY3QgdGhlIHRhYmxlIGJvZHkgZWxlbWVudCB1c2luZyBpdHMgaWRcbi8vICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdHVkZW50LXRhYmxlIHRib2R5XCIpO1xuXG4vLyAgIC8vIENoZWNrIGlmIHRoZSB0YWJsZSBib2R5IGVsZW1lbnQgZXhpc3RzXG4vLyAgIGlmICh0YWJsZUJvZHkpIHtcbi8vICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGFycmF5IG9mIHN0dWRlbnRzXG4vLyAgICAgc3R1ZGVudHNMaXN0LmZvckVhY2goc3R1ZGVudCA9PiB7XG4vLyAgICAgICAvLyBDcmVhdGUgYSBuZXcgdGFibGUgcm93IGVsZW1lbnRcbi8vICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuLy8gICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRhYmxlIGNlbGwgZWxlbWVudCBmb3IgdGhlIGZpcnN0IG5hbWVcbi8vICAgICAgIGNvbnN0IGZpcnN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4vLyAgICAgICAvLyBTZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZmlyc3QgbmFtZSBjZWxsIHRvIHRoZSBzdHVkZW50J3MgZmlyc3QgbmFtZVxuLy8gICAgICAgZmlyc3ROYW1lQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuXG4vLyAgICAgICAvLyBDcmVhdGUgYSBuZXcgdGFibGUgY2VsbCBlbGVtZW50IGZvciB0aGUgbG9jYXRpb25cbi8vICAgICAgIGNvbnN0IGxvY2F0aW9uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbi8vICAgICAgIC8vIFNldCB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBsb2NhdGlvbiBjZWxsIHRvIHRoZSBzdHVkZW50J3MgbG9jYXRpb25cbi8vICAgICAgIGxvY2F0aW9uQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG5cbi8vICAgICAgIC8vIEFwcGVuZCB0aGUgZmlyc3QgbmFtZSBjZWxsIHRvIHRoZSB0YWJsZSByb3dcbi8vICAgICAgIHJvdy5hcHBlbmRDaGlsZChmaXJzdE5hbWVDZWxsKTtcbi8vICAgICAgIC8vIEFwcGVuZCB0aGUgbG9jYXRpb24gY2VsbCB0byB0aGUgdGFibGUgcm93XG4vLyAgICAgICByb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25DZWxsKTtcblxuLy8gICAgICAgLy8gQXBwZW5kIHRoZSB0YWJsZSByb3cgdG8gdGhlIHRhYmxlIGJvZHlcbi8vICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xuLy8gICAgIH0pO1xuLy8gICB9XG4vLyB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=