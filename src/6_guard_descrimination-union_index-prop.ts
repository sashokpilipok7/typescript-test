// function add(n1: number, n2: number, printResult: boolean, phrase: string) {
//   //   if (typeof n1 !== "number" || typeof n2 !== "number") // guard type which checks our code in runtime
//   // console.log("Error....");
//   if (printResult) {
//     console.log(`${phrase}`, n1 + n2);
//   } else {
//     return n1 + n2;
//   }
// }

//guards = if(let key in obj) || typeof something || instance of some Class
// discriminated union (pattern) - if we have one common liter property in every object, which describe the object ( works with object and even with interfaces)

interface People {
  type: "people"; //  here= discrimination union pattern
  name: string;
  makeOrder: () => string[];
}

interface Car {
  type: "car"; //  here= discrimination union pattern
  model: string;
  makeOrder: () => string[];
}

type Client = People | Car; //here = discrimination union pattern

function serveClient(client: Client) {
  if (client.type === "car") fetch(`${client.model}`);
  else if (client.type === "people") fetch(`${client.name}`); // here= discrimination union pattern
}

serveClient({ name: "Sasha", type: "people", makeOrder: () => [] });
serveClient({ model: "Lada", type: "car", makeOrder: () => [] });

interface ErrorContainer {
  id: string;
  [prop: string]: string; // index type
}

const errorBag: ErrorContainer = {
  id: "uuid",
  email: "dafa",
  userName: "affa",
};

// type casting

function take() {
  return {};
}

const obj = take() as { name: string }; // as  - type casting
