"use strict";
// Triple slash directive that includes all the dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// Import everything from crud.js as CRUD
var CRUD = require("./crud");
// Create an object called row with the type RowElement
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
// Create a const variable named newRowID with the type RowID and assign the value the insertRow command
var newRowID = CRUD.insertRow(row);
// Create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
var updatedRow = __assign(__assign({}, row), { age: 23 });
// Call the updateRow command
CRUD.updateRow(newRowID, updatedRow);
// Call the deleteRow command
CRUD.deleteRow(newRowID);
