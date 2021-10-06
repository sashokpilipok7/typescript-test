const model: {
  name?: string;
  age: number;
  sizes: number[];
} = {
  name: "Subrina",
  age: 25,
  sizes: [95, 63, 90],
};

console.log(model.age);
// console.log(model.surname);

const arr = {
  p1: 11,
  p2: 22,
  p3: 33,
  //   [Symbol.iterator]: function* () {
  //     yield 1;
  //     yield 2;
  //     yield 3;
  //   },
};

for (let i in arr) {
  console.log(i);
}
// for (let i of arr) {
//   console.log(i);
// }

enum Role {
  PRODUCER = "admin",
  TALENT = 100,
  SUPERVISOR,
}

type Character = {
  name: string;
  surname: string;
  films: [string, Date];
  role: number | string;
};

const character: Character = {
  name: "Joni",
  surname: "Depth",
  films: ["first", new Date()],
  role: Role.TALENT,
};

console.log(Role);

character.films.push(
  "oops when we declare tuple its only with same length and types, but  push works and may change length and create error"
);

function displayRole(character: any) {
  if (typeof character === "object") {
    switch (character.role) {
      case Role.PRODUCER:
        console.log(Role.PRODUCER);
      case Role.TALENT:
        console.log(Role.TALENT);
    }
  }
}

displayRole(character);
