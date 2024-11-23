type Admin = {
  name: string;
  privileges: string[];
};

type MyEmployee = {
  name: string;
  startDate: Date;
};

interface ElevatedEmployeeI extends Admin, MyEmployee {}

type ElevatedEmployee = Admin & MyEmployee;

type StrOrNum = string | number;

const e1: ElevatedEmployee = {
  name: "Alexey",
  privileges: ["Admin"],
  startDate: new Date(),
};

const e2: ElevatedEmployeeI = {
  name: "Martin",
  privileges: ["Admin", "Owner"],
  startDate: new Date("2024-05-06"),
};

console.log(`employee1 ${e1.name}, start date ${e1.startDate}`);
console.log(`employee2 ${e2.name}, start date ${e2.startDate}`);

function combine(a: StrOrNum, b: StrOrNum) : StrOrNum {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + " " + b.toString();
  }
  return a + b;
}

let a: StrOrNum = 12;
let b: StrOrNum = "result";
let c: StrOrNum = "!";

console.log(combine(a, b));

