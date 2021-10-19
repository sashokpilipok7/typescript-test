const fetchedPillDate = {
  name: "Mgb6",
  price: 340,
  factory: { name: " Kyiv", description: "Some huge main pills factory" },
};

const userInput = "";
const storedData = userInput || "DEFAULT"; // DEFAULT
const storedData2 = userInput ?? "DEFAULT"; //userInput (only check null or undefined) повертає перший який не нул і не андефайнд

console.log(storedData, "storedData");
console.log(storedData2, "storedData2");
