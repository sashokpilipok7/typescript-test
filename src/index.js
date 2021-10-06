"use strict";
let girl = {
    name: "Ruslana",
    age: 20,
};
const button = document.querySelector("#usual-button");
button.addEventListener("click", () => console.log("click"));
const arr = {
    p1: 11,
    p2: 22,
    p3: 33,
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    },
};
for (let i in arr) {
    console.log(i);
}
// for (let i of arr) {
//   console.log(i);
// }
