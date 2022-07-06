"use strict";
exports.__esModule = true;
exports.twoOldestAges = void 0;
function twoOldestAges(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(ages.length - 2);
}
exports.twoOldestAges = twoOldestAges;
;
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
