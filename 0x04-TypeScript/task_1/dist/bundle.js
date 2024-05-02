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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// /**
//  * Define the Teacher interface
//  * - firstName: string
//  * - lastName: string
//  * - fullTimeEmployee: boolean
//  * - yearsOfExperience?: number (optional)
//  * - location: string
//  * - [key: string]: any (allow any additional attribute)
//  */
// interface Teacher {
//   firstName: string;
//   lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any; // Allow any additional attribute
// }
// Define the StudentClass class
var StudentClass = /** @class */ (function () {
    function StudentClass(student) {
        this.firstName = student.firstName;
        this.lastName = student.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Create an instance of the StudentClass
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
};
var studentInstance = new StudentClass(student1);
// Test the methods
console.log(studentInstance.workOnHomework()); // Output: Currently working
console.log(studentInstance.displayName()); // Output: John


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsTUFBTTtBQUNOLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLGlDQUFpQztBQUNqQyw2Q0FBNkM7QUFDN0Msd0JBQXdCO0FBQ3hCLDJEQUEyRDtBQUMzRCxNQUFNO0FBQ04sc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsK0JBQStCO0FBQy9CLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsMERBQTBEO0FBQzFELElBQUk7QUE0TUosZ0NBQWdDO0FBQ2hDO0lBSUUsc0JBQVksT0FBeUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUVELHlDQUF5QztBQUN6QyxJQUFNLFFBQVEsR0FBcUI7SUFDakMsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRW5ELG1CQUFtQjtBQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsNEJBQTRCO0FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsIi8vIC8qKlxuLy8gICogRGVmaW5lIHRoZSBUZWFjaGVyIGludGVyZmFjZVxuLy8gICogLSBmaXJzdE5hbWU6IHN0cmluZ1xuLy8gICogLSBsYXN0TmFtZTogc3RyaW5nXG4vLyAgKiAtIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW5cbi8vICAqIC0geWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXIgKG9wdGlvbmFsKVxuLy8gICogLSBsb2NhdGlvbjogc3RyaW5nXG4vLyAgKiAtIFtrZXk6IHN0cmluZ106IGFueSAoYWxsb3cgYW55IGFkZGl0aW9uYWwgYXR0cmlidXRlKVxuLy8gICovXG4vLyBpbnRlcmZhY2UgVGVhY2hlciB7XG4vLyAgIGZpcnN0TmFtZTogc3RyaW5nO1xuLy8gICBsYXN0TmFtZTogc3RyaW5nO1xuLy8gICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuLy8gICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbi8vICAgbG9jYXRpb246IHN0cmluZztcbi8vICAgW2tleTogc3RyaW5nXTogYW55OyAvLyBBbGxvdyBhbnkgYWRkaXRpb25hbCBhdHRyaWJ1dGVcbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBGdW5jdGlvbiB0byBjcmVhdGUgYSBUZWFjaGVyIG9iamVjdFxuLy8gICogQHBhcmFtIGluaXRpYWxBdHRyaWJ1dGVzIEluaXRpYWwgYXR0cmlidXRlcyBmb3IgdGhlIHRlYWNoZXJcbi8vICAqIEByZXR1cm5zIFRlYWNoZXIgb2JqZWN0XG4vLyAgKi9cbi8vIGNvbnN0IGNyZWF0ZVRlYWNoZXIgPSAoaW5pdGlhbEF0dHJpYnV0ZXM6IFRlYWNoZXIpOiBUZWFjaGVyID0+IHtcbi8vICAgY29uc3QgdGVhY2hlcjogVGVhY2hlciA9IHtcbi8vICAgICAuLi5pbml0aWFsQXR0cmlidXRlcyxcbi8vICAgfTtcbi8vICAgcmV0dXJuIHRlYWNoZXI7XG4vLyB9O1xuXG4vLyAvKipcbi8vICAqIEZ1bmN0aW9uIHRvIHJlbmRlciBhIFRlYWNoZXIgb2JqZWN0IGluIHRoZSBIVE1MIGRvY3VtZW50XG4vLyAgKiBAcGFyYW0gdGVhY2hlciBUZWFjaGVyIG9iamVjdCB0byByZW5kZXJcbi8vICAqL1xuLy8gY29uc3QgcmVuZGVyVGVhY2hlciA9ICh0ZWFjaGVyOiBUZWFjaGVyKTogdm9pZCA9PiB7XG4vLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuLy8gICAgIDxoMj5UZWFjaGVyIEluZm9ybWF0aW9uPC9oMj5cbi8vICAgICA8cD5GaXJzdCBOYW1lOiAke3RlYWNoZXIuZmlyc3ROYW1lfTwvcD5cbi8vICAgICA8cD5MYXN0IE5hbWU6ICR7dGVhY2hlci5sYXN0TmFtZX08L3A+XG4vLyAgICAgPHA+RnVsbCBUaW1lIEVtcGxveWVlOiAke3RlYWNoZXIuZnVsbFRpbWVFbXBsb3llZX08L3A+XG4vLyAgICAgPHA+TG9jYXRpb246ICR7dGVhY2hlci5sb2NhdGlvbn08L3A+XG4vLyAgICAgJHt0ZWFjaGVyLnllYXJzT2ZFeHBlcmllbmNlID8gYDxwPlllYXJzIG9mIEV4cGVyaWVuY2U6ICR7dGVhY2hlci55ZWFyc09mRXhwZXJpZW5jZX08L3A+YCA6ICcnfVxuLy8gICAgICR7T2JqZWN0LmtleXModGVhY2hlcilcbi8vICAgICAgIC5maWx0ZXIoa2V5ID0+ICFbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdmdWxsVGltZUVtcGxveWVlJywgJ3llYXJzT2ZFeHBlcmllbmNlJywgJ2xvY2F0aW9uJ10uaW5jbHVkZXMoa2V5KSlcbi8vICAgICAgIC5tYXAoa2V5ID0+IGA8cD4ke2tleX06ICR7dGVhY2hlcltrZXldfTwvcD5gKX1cbi8vICAgYDtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuLy8gfTtcblxuLy8gLy8gQ3JlYXRlIGEgdGVhY2hlciBvYmplY3Qgd2l0aCBpbml0aWFsIGF0dHJpYnV0ZXNcbi8vIGNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0gY3JlYXRlVGVhY2hlcih7XG4vLyAgIGZpcnN0TmFtZTogJ0pvaG4nLFxuLy8gICBsYXN0TmFtZTogJ0RvZScsXG4vLyAgIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuLy8gICBsb2NhdGlvbjogJ0xvbmRvbicsXG4vLyAgIGNvbnRyYWN0OiBmYWxzZSwgLy8gQWRkaW5nIGFkZGl0aW9uYWwgYXR0cmlidXRlXG4vLyB9KTtcblxuLy8gLy8gUmVuZGVyIHRoZSB0ZWFjaGVyIG9iamVjdCBpbiB0aGUgSFRNTCBkb2N1bWVudFxuLy8gcmVuZGVyVGVhY2hlcih0ZWFjaGVyMyk7XG5cblxuLy8gLyoqXG4vLyAgKiBEZWZpbmUgdGhlIFRlYWNoZXIgaW50ZXJmYWNlXG4vLyAgKiAtIGZpcnN0TmFtZTogc3RyaW5nXG4vLyAgKiAtIGxhc3ROYW1lOiBzdHJpbmdcbi8vICAqIC0gZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhblxuLy8gICogLSB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlciAob3B0aW9uYWwpXG4vLyAgKiAtIGxvY2F0aW9uOiBzdHJpbmdcbi8vICAqIC0gW2tleTogc3RyaW5nXTogYW55IChhbGxvdyBhbnkgYWRkaXRpb25hbCBhdHRyaWJ1dGUpXG4vLyAgKi9cbi8vIGludGVyZmFjZSBUZWFjaGVyIHtcbi8vICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4vLyAgIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4vLyAgIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuLy8gICBsb2NhdGlvbjogc3RyaW5nO1xuLy8gICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIEFsbG93IGFueSBhZGRpdGlvbmFsIGF0dHJpYnV0ZVxuLy8gfVxuXG4vLyAvKipcbi8vICAqIERlZmluZSB0aGUgRGlyZWN0b3JzIGludGVyZmFjZSB0aGF0IGV4dGVuZHMgVGVhY2hlclxuLy8gICogLSBudW1iZXJPZlJlcG9ydHM6IG51bWJlclxuLy8gICovXG4vLyBpbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4vLyAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xuLy8gfVxuXG4vLyAvKipcbi8vICAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFRlYWNoZXIgb2JqZWN0XG4vLyAgKiBAcGFyYW0gaW5pdGlhbEF0dHJpYnV0ZXMgSW5pdGlhbCBhdHRyaWJ1dGVzIGZvciB0aGUgdGVhY2hlclxuLy8gICogQHJldHVybnMgVGVhY2hlciBvYmplY3Rcbi8vICAqL1xuLy8gY29uc3QgY3JlYXRlVGVhY2hlciA9IChpbml0aWFsQXR0cmlidXRlczogVGVhY2hlcik6IFRlYWNoZXIgPT4ge1xuLy8gICBjb25zdCB0ZWFjaGVyOiBUZWFjaGVyID0ge1xuLy8gICAgIC4uLmluaXRpYWxBdHRyaWJ1dGVzLFxuLy8gICB9O1xuLy8gICByZXR1cm4gdGVhY2hlcjtcbi8vIH07XG5cbi8vIC8qKlxuLy8gICogRnVuY3Rpb24gdG8gcmVuZGVyIGEgVGVhY2hlciBvYmplY3QgaW4gdGhlIEhUTUwgZG9jdW1lbnRcbi8vICAqIEBwYXJhbSB0ZWFjaGVyIFRlYWNoZXIgb2JqZWN0IHRvIHJlbmRlclxuLy8gICovXG4vLyBjb25zdCByZW5kZXJUZWFjaGVyID0gKHRlYWNoZXI6IFRlYWNoZXIpOiB2b2lkID0+IHtcbi8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4vLyAgICAgPGgyPlRlYWNoZXIgSW5mb3JtYXRpb248L2gyPlxuLy8gICAgIDxwPkZpcnN0IE5hbWU6ICR7dGVhY2hlci5maXJzdE5hbWV9PC9wPlxuLy8gICAgIDxwPkxhc3QgTmFtZTogJHt0ZWFjaGVyLmxhc3ROYW1lfTwvcD5cbi8vICAgICA8cD5GdWxsIFRpbWUgRW1wbG95ZWU6ICR7dGVhY2hlci5mdWxsVGltZUVtcGxveWVlfTwvcD5cbi8vICAgICA8cD5Mb2NhdGlvbjogJHt0ZWFjaGVyLmxvY2F0aW9ufTwvcD5cbi8vICAgICAke3RlYWNoZXIueWVhcnNPZkV4cGVyaWVuY2UgPyBgPHA+WWVhcnMgb2YgRXhwZXJpZW5jZTogJHt0ZWFjaGVyLnllYXJzT2ZFeHBlcmllbmNlfTwvcD5gIDogJyd9XG4vLyAgICAgJHtPYmplY3Qua2V5cyh0ZWFjaGVyKVxuLy8gICAgICAgLmZpbHRlcihrZXkgPT4gIVsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2Z1bGxUaW1lRW1wbG95ZWUnLCAneWVhcnNPZkV4cGVyaWVuY2UnLCAnbG9jYXRpb24nXS5pbmNsdWRlcyhrZXkpKVxuLy8gICAgICAgLm1hcChrZXkgPT4gYDxwPiR7a2V5fTogJHt0ZWFjaGVyW2tleV19PC9wPmApfVxuLy8gICBgO1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4vLyB9O1xuXG4vLyAvLyBDcmVhdGUgYSB0ZWFjaGVyIG9iamVjdCB3aXRoIGluaXRpYWwgYXR0cmlidXRlc1xuLy8gY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSBjcmVhdGVUZWFjaGVyKHtcbi8vICAgZmlyc3ROYW1lOiAnSm9obicsXG4vLyAgIGxhc3ROYW1lOiAnRG9lJyxcbi8vICAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4vLyAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcbi8vICAgY29udHJhY3Q6IGZhbHNlLCAvLyBBZGRpbmcgYWRkaXRpb25hbCBhdHRyaWJ1dGVcbi8vIH0pO1xuXG4vLyAvLyBSZW5kZXIgdGhlIHRlYWNoZXIgb2JqZWN0IGluIHRoZSBIVE1MIGRvY3VtZW50XG4vLyByZW5kZXJUZWFjaGVyKHRlYWNoZXIzKTtcblxuLy8gLy8gQ3JlYXRlIGEgZGlyZWN0b3Igb2JqZWN0IHdpdGggaW5pdGlhbCBhdHRyaWJ1dGVzXG4vLyBjb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbi8vICAgZmlyc3ROYW1lOiAnSm9obicsXG4vLyAgIGxhc3ROYW1lOiAnRG9lJyxcbi8vICAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbi8vICAgbG9jYXRpb246ICdMb25kb24nLFxuLy8gICBudW1iZXJPZlJlcG9ydHM6IDE3LFxuLy8gfTtcblxuLy8gLy8gUmVuZGVyIHRoZSBkaXJlY3RvciBvYmplY3QgaW4gdGhlIEhUTUwgZG9jdW1lbnRcbi8vIHJlbmRlclRlYWNoZXIoZGlyZWN0b3IxKTtcblxuXG5cbi8vIC8vIERlZmluZSB0aGUgVGVhY2hlciBpbnRlcmZhY2Vcbi8vIGludGVyZmFjZSBUZWFjaGVyIHtcbi8vICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4vLyAgIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4vLyAgIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuLy8gICBsb2NhdGlvbjogc3RyaW5nO1xuLy8gICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIEFsbG93IGFueSBhZGRpdGlvbmFsIGF0dHJpYnV0ZVxuLy8gfVxuXG4vLyAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYSBUZWFjaGVyIG9iamVjdFxuLy8gY29uc3QgY3JlYXRlVGVhY2hlciA9IChpbml0aWFsQXR0cmlidXRlczogVGVhY2hlcik6IFRlYWNoZXIgPT4ge1xuLy8gICBjb25zdCB0ZWFjaGVyOiBUZWFjaGVyID0ge1xuLy8gICAgIC4uLmluaXRpYWxBdHRyaWJ1dGVzLFxuLy8gICB9O1xuLy8gICByZXR1cm4gdGVhY2hlcjtcbi8vIH07XG5cbi8vIC8vIEZ1bmN0aW9uIHRvIHJlbmRlciBhIFRlYWNoZXIgb2JqZWN0IGluIHRoZSBIVE1MIGRvY3VtZW50XG4vLyBjb25zdCByZW5kZXJUZWFjaGVyID0gKHRlYWNoZXI6IFRlYWNoZXIpOiB2b2lkID0+IHtcbi8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4vLyAgICAgPGgyPlRlYWNoZXIgSW5mb3JtYXRpb248L2gyPlxuLy8gICAgIDxwPkZpcnN0IE5hbWU6ICR7dGVhY2hlci5maXJzdE5hbWV9PC9wPlxuLy8gICAgIDxwPkxhc3QgTmFtZTogJHt0ZWFjaGVyLmxhc3ROYW1lfTwvcD5cbi8vICAgICA8cD5GdWxsIFRpbWUgRW1wbG95ZWU6ICR7dGVhY2hlci5mdWxsVGltZUVtcGxveWVlfTwvcD5cbi8vICAgICA8cD5Mb2NhdGlvbjogJHt0ZWFjaGVyLmxvY2F0aW9ufTwvcD5cbi8vICAgICAke3RlYWNoZXIueWVhcnNPZkV4cGVyaWVuY2UgPyBgPHA+WWVhcnMgb2YgRXhwZXJpZW5jZTogJHt0ZWFjaGVyLnllYXJzT2ZFeHBlcmllbmNlfTwvcD5gIDogJyd9XG4vLyAgICAgJHtPYmplY3Qua2V5cyh0ZWFjaGVyKVxuLy8gICAgICAgLmZpbHRlcihrZXkgPT4gIVsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2Z1bGxUaW1lRW1wbG95ZWUnLCAneWVhcnNPZkV4cGVyaWVuY2UnLCAnbG9jYXRpb24nXS5pbmNsdWRlcyhrZXkpKVxuLy8gICAgICAgLm1hcChrZXkgPT4gYDxwPiR7a2V5fTogJHt0ZWFjaGVyW2tleV19PC9wPmApfVxuLy8gICAgIDxwPlByaW50ZWQgVGVhY2hlcjogJHtwcmludFRlYWNoZXIodGVhY2hlci5maXJzdE5hbWUsIHRlYWNoZXIubGFzdE5hbWUpfTwvcD5cbi8vICAgYDtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuLy8gfTtcblxuLy8gLy8gRnVuY3Rpb24gdG8gcHJpbnQgdGhlIHRlYWNoZXIncyBuYW1lIGluIGEgc3BlY2lmaWMgZm9ybWF0XG4vLyBjb25zdCBwcmludFRlYWNoZXIgPSAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuLy8gICByZXR1cm4gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX0uICR7bGFzdE5hbWV9YDtcbi8vIH07XG5cbi8vIC8vIEludGVyZmFjZSBmb3IgdGhlIHByaW50VGVhY2hlciBmdW5jdGlvblxuLy8gaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9uIHtcbi8vICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xuLy8gfVxuXG4vLyAvLyBDcmVhdGUgYSB0ZWFjaGVyIG9iamVjdCB3aXRoIGluaXRpYWwgYXR0cmlidXRlc1xuLy8gY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSBjcmVhdGVUZWFjaGVyKHtcbi8vICAgZmlyc3ROYW1lOiAnSm9obicsXG4vLyAgIGxhc3ROYW1lOiAnRG9lJyxcbi8vICAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4vLyAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcbi8vICAgY29udHJhY3Q6IGZhbHNlLCAvLyBBZGRpbmcgYWRkaXRpb25hbCBhdHRyaWJ1dGVcbi8vIH0pO1xuXG4vLyAvLyBSZW5kZXIgdGhlIHRlYWNoZXIgb2JqZWN0IGluIHRoZSBIVE1MIGRvY3VtZW50XG4vLyByZW5kZXJUZWFjaGVyKHRlYWNoZXIzKTtcblxuXG5cblxuLy8gRGVmaW5lIHRoZSBTdHVkZW50SW50ZXJmYWNlIGludGVyZmFjZVxuaW50ZXJmYWNlIFN0dWRlbnRJbnRlcmZhY2Uge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuLy8gRGVmaW5lIHRoZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2UgaW50ZXJmYWNlXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbi8vIERlZmluZSB0aGUgU3R1ZGVudENsYXNzIGNsYXNzXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc3R1ZGVudDogU3R1ZGVudEludGVyZmFjZSkge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gc3R1ZGVudC5maXJzdE5hbWU7XG4gICAgdGhpcy5sYXN0TmFtZSA9IHN0dWRlbnQubGFzdE5hbWU7XG4gIH1cblxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ3VycmVudGx5IHdvcmtpbmcnO1xuICB9XG5cbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gIH1cbn1cblxuLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBTdHVkZW50Q2xhc3NcbmNvbnN0IHN0dWRlbnQxOiBTdHVkZW50SW50ZXJmYWNlID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxufTtcblxuY29uc3Qgc3R1ZGVudEluc3RhbmNlID0gbmV3IFN0dWRlbnRDbGFzcyhzdHVkZW50MSk7XG5cbi8vIFRlc3QgdGhlIG1ldGhvZHNcbmNvbnNvbGUubG9nKHN0dWRlbnRJbnN0YW5jZS53b3JrT25Ib21ld29yaygpKTsgLy8gT3V0cHV0OiBDdXJyZW50bHkgd29ya2luZ1xuY29uc29sZS5sb2coc3R1ZGVudEluc3RhbmNlLmRpc3BsYXlOYW1lKCkpOyAvLyBPdXRwdXQ6IEpvaG5cbiJdLCJzb3VyY2VSb290IjoiIn0=