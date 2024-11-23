export function add(x: number, y: number, displayResult: boolean): number {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Invalid type");
  }

  const result: number = x + y;

  if (displayResult) {
    console.log("Result: ", result);
  }

  return result;
}

const displayResult: boolean = true;

add(12, 444, displayResult);

const person: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "Alexey",
  age: 24,
  role: [2, "software engineer"],
};

console.log(person);

let myArr: string[] = [];
myArr.push("Alexey");
myArr.push("Tomasz");
myArr.push("Maximilian");

for (const item of myArr) {
  console.log(item.toLowerCase());
}

enum Role {
  ADMIN,
  AUTHOR,
  USER,
}

export function displayEnumValue(role: Role) {
  console.log(role);
}

displayEnumValue(Role.ADMIN);
displayEnumValue(Role.AUTHOR);
