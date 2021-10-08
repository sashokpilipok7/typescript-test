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

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

console.log(misha, "misha");
