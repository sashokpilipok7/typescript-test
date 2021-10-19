const arr: Array<string> = ["ONE", "TWO", "THREE"]; // GENERIC TYPE IS A TYPE WHICH IS KIND OF CONNECTED WITH SOME OTHER TYPE AND IS REALLY FLEXIBLR REGARDING WHICH IS EXECT TYPE
const promise: Promise<string> = new Promise((resolve) => resolve(""));

function merge<T, U>(objA: T, objB: U) {
  // type intersects dinemycly when we are calling the function, such case helps as to better work with result
  return Object.assign(objA, objB);
}

const res = merge({ name: "Max" }, { age: 20 });
const res2 = merge<{}, {}>({}, {});

console.log(res.age);

// i can add a few constrains for generic types, like when you want object but only object

function makeFriends<T extends object, U extends object>(f1: T, f2: U) {
  return [
    { ...f1, friend: f2 },
    { ...f2, friend: f1 },
  ];
}

const friends = makeFriends({}, {});

//---------------------------------------

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  // good if i want to be more flexible without many overloads or huge union type
  let description = "There is no value!";
  if (element.length) {
    description = `There is ${element.length} elements!`;
  }
  return [element, description];
}

// function countAndDescribe(element: Lengthy): [Lengthy, string] { // in such case we have less flexibility
//   let description = "There is no value!";
//   if (element.length) {
//     description = `There is ${element.length} elements!`;
//   }
//   return [element, description];
// }

console.log(countAndDescribe({ length: 10, name: "dfafaf" }));

//-=--------------------------

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value is " + obj[key];
}

console.log(extractAndConvert({ name: "Sasha", surname: "Pylypenko" }, "name"));
console.log(
  extractAndConvert({ name: "Sasha", surname: "Pylypenko" }, "surname")
);
