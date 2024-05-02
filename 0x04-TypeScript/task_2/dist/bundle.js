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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsd0NBQXdDO0FBQ3hDLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxJQUFJO0FBZ0tKOzs7O0dBSUc7QUFDSCxJQUFNLFVBQVUsR0FBRyxVQUFDLFVBQW9CO0lBQ3RDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPLGVBQWUsQ0FBQztLQUN4QjtTQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUNuQyxPQUFPLGtCQUFrQixDQUFDO0tBQzNCO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsYUFBYTtBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7QUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4udHNcIik7XG4iLCIvLyAvLyBEZWZpbmUgRGlyZWN0b3JJbnRlcmZhY2UgaW50ZXJmYWNlXG4vLyBpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuLy8gICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuLy8gICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4vLyAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbi8vIH1cblxuLy8gLy8gRGVmaW5lIFRlYWNoZXJJbnRlcmZhY2UgaW50ZXJmYWNlXG4vLyBpbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4vLyAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4vLyAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbi8vICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG4vLyB9XG5cbi8vIC8vIERlZmluZSBEaXJlY3RvciBjbGFzcyBpbXBsZW1lbnRpbmcgRGlyZWN0b3JJbnRlcmZhY2Vcbi8vIGNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuLy8gICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbi8vICAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xuLy8gICB9XG5cbi8vICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbi8vICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4vLyAgIH1cblxuLy8gICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuLy8gICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBEZWZpbmUgVGVhY2hlciBjbGFzcyBpbXBsZW1lbnRpbmcgVGVhY2hlckludGVyZmFjZVxuLy8gY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuLy8gICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbi8vICAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcbi8vICAgfVxuXG4vLyAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4vLyAgICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiO1xuLy8gICB9XG5cbi8vICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuLy8gICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIERlZmluZSBjcmVhdGVFbXBsb3llZSBmdW5jdGlvblxuLy8gY29uc3QgY3JlYXRlRW1wbG95ZWUgPSAoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIgPT4ge1xuLy8gICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIiAmJiBzYWxhcnkgPCA1MDApIHtcbi8vICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4vLyAgIH1cbi8vIH07XG5cbi8vIC8vIFRlc3QgY2FzZXNcbi8vIGNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAgLy8gVGVhY2hlclxuLy8gY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyAvLyBEaXJlY3RvclxuLy8gY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7IC8vIERpcmVjdG9yXG5cblxuXG5cblxuXG5cbi8vIC8qKlxuLy8gICogRGVmaW5lIHRoZSBEaXJlY3RvckludGVyZmFjZSBpbnRlcmZhY2Ugd2l0aCB0aGUgZXhwZWN0ZWQgbWV0aG9kcy5cbi8vICAqL1xuLy8gaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbi8vICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbi8vICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuLy8gICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG4vLyB9XG5cbi8vIC8qKlxuLy8gICogRGVmaW5lIHRoZSBUZWFjaGVySW50ZXJmYWNlIGludGVyZmFjZSB3aXRoIHRoZSBleHBlY3RlZCBtZXRob2RzLlxuLy8gICovXG4vLyBpbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4vLyAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4vLyAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbi8vICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG4vLyB9XG5cbi8vIC8qKlxuLy8gICogQ3JlYXRlIGEgY2xhc3MgRGlyZWN0b3IgdGhhdCBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlLlxuLy8gICovXG4vLyBjbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbi8vICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4vLyAgICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG4vLyAgIH1cblxuLy8gICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuLy8gICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XG4vLyAgIH1cblxuLy8gICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuLy8gICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XG4vLyAgIH1cbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBDcmVhdGUgYSBjbGFzcyBUZWFjaGVyIHRoYXQgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlLlxuLy8gICovXG4vLyBjbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4vLyAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuLy8gICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbi8vICAgfVxuXG4vLyAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4vLyAgICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcbi8vICAgfVxuXG4vLyAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbi8vICAgICByZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG4vLyAgIH1cbi8vIH1cblxuLy8gLyoqXG4vLyAgKiBDcmVhdGUgYSBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZSB0aGF0IHJldHVybnMgZWl0aGVyIGEgRGlyZWN0b3Igb3IgYSBUZWFjaGVyIGluc3RhbmNlIGJhc2VkIG9uIHRoZSBzYWxhcnkuXG4vLyAgKiBAcGFyYW0gc2FsYXJ5IFRoZSBzYWxhcnkgb2YgdGhlIGVtcGxveWVlLlxuLy8gICogQHJldHVybnMgRWl0aGVyIGEgRGlyZWN0b3Igb3IgYSBUZWFjaGVyIGluc3RhbmNlLlxuLy8gICovXG4vLyBjb25zdCBjcmVhdGVFbXBsb3llZSA9IChzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciA9PiB7XG4vLyAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbi8vICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG4vLyAgIH1cbi8vIH07XG5cbi8vIC8qKlxuLy8gICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVtcGxveWVlIGlzIGEgRGlyZWN0b3IuXG4vLyAgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIHRvIGNoZWNrLlxuLy8gICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZW1wbG95ZWUgaXMgYSBEaXJlY3RvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuLy8gICovXG4vLyBjb25zdCBpc0RpcmVjdG9yID0gKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciA9PiB7XG4vLyAgIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xuLy8gfTtcblxuLy8gLyoqXG4vLyAgKiBFeGVjdXRlIHRoZSB3b3JrIHRhc2tzIGZvciB0aGUgZ2l2ZW4gZW1wbG95ZWUuXG4vLyAgKiBAcGFyYW0gZW1wbG95ZWUgVGhlIGVtcGxveWVlIGZvciB3aG9tIHRoZSB3b3JrIHRhc2tzIHNob3VsZCBiZSBleGVjdXRlZC5cbi8vICAqL1xuLy8gY29uc3QgZXhlY3V0ZVdvcmsgPSAoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHZvaWQgPT4ge1xuLy8gICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpO1xuLy8gICB9XG4vLyB9O1xuXG4vLyAvLyBUZXN0IGNhc2VzXG4vLyBleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKTsgLy8gT3V0cHV0OiBcIkdldHRpbmcgdG8gd29ya1wiXG4vLyBleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSk7IC8vIE91dHB1dDogXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCJcblxuXG5cblxuXG5cbi8qKlxuICogRGVmaW5lIGEgU3RyaW5nIGxpdGVyYWwgdHlwZSBuYW1lZCBTdWJqZWN0cyBhbGxvd2luZyBhXG4gKiB2YXJpYWJsZSB0byBoYXZlIHRoZSB2YWx1ZSBNYXRoIG9yIEhpc3Rvcnkgb25seS5cbiAqL1xudHlwZSBTdWJqZWN0cyA9ICdNYXRoJyB8ICdIaXN0b3J5JztcblxuLyoqXG4gKiBXcml0ZSBhIGZ1bmN0aW9uIG5hbWVkIHRlYWNoQ2xhc3MuXG4gKiBAcGFyYW0gdG9kYXlDbGFzcyBUaGUgY2xhc3MgdG8gdGVhY2guXG4gKiBAcmV0dXJucyBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBzdWJqZWN0IGJlaW5nIHRhdWdodC5cbiAqL1xuY29uc3QgdGVhY2hDbGFzcyA9ICh0b2RheUNsYXNzOiBTdWJqZWN0cyk6IHN0cmluZyA9PiB7XG4gIGlmICh0b2RheUNsYXNzID09PSAnTWF0aCcpIHtcbiAgICByZXR1cm4gJ1RlYWNoaW5nIE1hdGgnO1xuICB9IGVsc2UgaWYgKHRvZGF5Q2xhc3MgPT09ICdIaXN0b3J5Jykge1xuICAgIHJldHVybiAnVGVhY2hpbmcgSGlzdG9yeSc7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNsYXNzJyk7XG4gIH1cbn07XG5cbi8vIFRlc3QgY2FzZXNcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7IC8vIE91dHB1dDogXCJUZWFjaGluZyBNYXRoXCJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7IC8vIE91dHB1dDogXCJUZWFjaGluZyBIaXN0b3J5XCJcbiJdLCJzb3VyY2VSb290IjoiIn0=