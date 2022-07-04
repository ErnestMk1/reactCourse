"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome';
// console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'IAmNotGay';
sum = x + y;
var isBeginner = true;
var total = 0;
var name = 'Ernest';
var sentence = "My name is ".concat(name);
// console.log(sentence);
var n = null;
var u = undefined;
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var strArr = ['1', '2', '3'];
var strArr2 = ['4', '5', '6'];
// console.log(strArr);
// console.log(strArr2);
var mixedArr = ['Ernest', 2];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// console.log(c);
var randomValue = 10;
randomValue = '10';
randomValue = true;
// console.log(randomValue.name);
var unknownValue = 10;
unknownValue = 'string';
var multiType;
multiType = 10;
multiType = false;
// functions in TS:
var add = function (num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
};
;
var fullName = function (person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
};
var p = {
    firstName: 'Ernest'
};
// fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    ;
    Employee.prototype.greet = function () {
        console.log("Hi, ".concat(this.employeeName));
    };
    ;
    return Employee;
}());
;
var emp1 = new Employee('Ernest');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    ;
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    ;
    return Manager;
}(Employee));
;
var m1 = new Manager('Maris');
m1.greet();
m1.delegateWork();
