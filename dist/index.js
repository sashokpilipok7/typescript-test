"use strict";
// function add(n1: number, n2: number, printResult: boolean, phrase: string) {
//   //   if (typeof n1 !== "number" || typeof n2 !== "number") // guard type which checks our code in runtime
//   // console.log("Error....");
//   if (printResult) {
//     console.log(`${phrase}`, n1 + n2);
//   } else {
//     return n1 + n2;
//   }
// }
function serveClient(client) {
    if (client.type === "car")
        fetch("" + client.model);
    else if (client.type === "people")
        fetch("" + client.name); // here= discrimination union pattern
}
serveClient({ name: "Sasha", type: "people", makeOrder: function () { return []; } });
serveClient({ model: "Lada", type: "car", makeOrder: function () { return []; } });
