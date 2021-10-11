"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// and also core idea of generic types is  flexibility and still strong typed, it's types which do something with other types
//в визовві функції ти робиш тільки те що тобі треба з конкретним типом переданим дженеріку, в випадку якщо заюзати юніон, тобі при запуску буде дозволено працювати з будь яким типом з переліку, це не є те що нам треба
//generic for the same types in each function calls or classes instance, union for allowing different types from the list on each call
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
//flexibility combine with type safety to work with class or result of function
var numberStorage = new DataStorage();
var textStorage = new DataStorage();
function createCourseGoal(title, completeUntil) {
    var courseGoal = {}; // utility types
    courseGoal.title = title;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
var arr = ["sasha", "ruslana"];
// arr.push('faf')
