function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  //   if (typeof n1 !== "number" || typeof n2 !== "number")
  // console.log("Error....");
  if (printResult) {
    console.log(`${phrase}`, n1 + n2);
  } else {
    return n1 + n2;
  }
}

const n1 = 5;
const n2 = 2.3;
let printResult = true;
let resultPhrase = "The Result is: ";

add(n1, n2, printResult, resultPhrase);
