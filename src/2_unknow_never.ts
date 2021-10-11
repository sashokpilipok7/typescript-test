let userInput: unknown; // better then any
let userName: string;

userInput = 5;
userInput = "Sashka";

if (typeof userInput === "string") {
  // no error because we added additional check
  userName = userInput;
}

// userName = userInput; // error because the type is unknow

function generateError(message: string, code: number): never {
  throw { message, codeData: code };
}

let res = generateError("Oops Some Error!", 12345);
console.log(res);
