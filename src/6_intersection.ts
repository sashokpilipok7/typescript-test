type User = {
  name: string;
};

type Friend = {
  stories: string[];
};

// interface userInterface extends Friend, User

type userFriend = User & Friend; // intersection схрещення of types is something similar to interface inheritance
// intersection can be used with any types and then simple builds the intersection of these
const misha: userFriend = {
  name: "Misha",
  stories: ["moped", "holoskiv"],
};

console.log(misha, "misha");

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("sasha", "pylypenko");
console.log(result);
