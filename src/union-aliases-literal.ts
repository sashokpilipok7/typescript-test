type ResultConversion = "as-number" | "as-text"; // type aliases or custom Type
type Flexible = number | string; // type aliases or custom Type
function add(
  n1: Flexible, // union type - союз
  n2: Flexible,
  resultConversion: "as-number" | "as-text" // union and literal type - liter is the specific value of normal types - буквальний
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

console.log(add(1, 5, "as-number"));
console.log(add("1", "5", "as-number"));
console.log(add("Sasha", "Pylypenko", "as-text"));
