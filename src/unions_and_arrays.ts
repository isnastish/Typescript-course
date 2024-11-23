type StrOrNum = string | number;
type User = { name: string; age: number };
type User0 = { name: string } | string;

export function combine(x: StrOrNum, y: StrOrNum) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "number") {
    return x.toString() + y.toString();
  }
  throw new Error(`Invalid types: ${typeof x}, ${typeof y}`);
}

export function acceptLiteral(literal: "this" | "that"): string {
  return literal.toUpperCase();
}

combine(12, 56);
console.log(combine("firstString", 12)); // concatenation

interface Person {
  name: string;
  age: number;
  tittle?: string;
  email: string;
}

const me: Person = {
  name: "Alexey",
  age: 24,
  tittle: "Software enginerr at Ubisoft",
  email: "alexey.yevtushenko.work@gmail.com",
};

console.log(me);

console.log(acceptLiteral("this"));
console.log(acceptLiteral("that"));

let u1: User0 = { name: "Max" };
u1 = "Michael";
