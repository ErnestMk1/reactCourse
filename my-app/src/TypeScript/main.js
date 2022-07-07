"use strict";
exports.__esModule = true;
exports.findOdd = void 0;
var findOdd = function (xs) {
    var isOdd = function (num) {
        return num % 2 === 1;
    };
    var uniqueItems = Array.from(new Set(xs));
    var _loop_1 = function (uniqueItem) {
        var numberOccurences = xs.filter(function (item) { return item === uniqueItem; }).length;
        if (isOdd(numberOccurences))
            return { value: uniqueItem };
    };
    for (var _i = 0, uniqueItems_1 = uniqueItems; _i < uniqueItems_1.length; _i++) {
        var uniqueItem = uniqueItems_1[_i];
        var state_1 = _loop_1(uniqueItem);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    Error('you lied. There are no numbers');
};
exports.findOdd = findOdd;
console.log((0, exports.findOdd)([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
// sorted one: [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4]
