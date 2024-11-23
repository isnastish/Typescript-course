type StringOrNumber = string | number;

export function printNumber(a: number): void {
  console.log("Result: " + a);
}

function combineAndPrintResult(
  a: number,
  b: number,
  callback: (x: number) => void
): void {
  const result = a + b;
  callback(result);
}

function invokeCallback(callback: (x: string) => void): void {
  callback("RandomString");
}

function combineWithCallback(
  a: number,
  b: number,
  message: string,
  toUpperCase: (x: string) => string
): string {
  const result = a + b;
  return toUpperCase(message + result);
}

/**
 * This function never returns.
 * @param message
 * @param errorCode
 */
function generateError(message: string, errorCode: number): never {
  throw { message: message, errorCode: errorCode };
}

try {
  generateError("Internal server error", 500);
} catch (error) {
  console.log("Caught an error!");
}

invokeCallback((x: string): void => {
  console.log("Received a string: " + x);
});

if (console.log(printNumber(1234)) === undefined) {
  console.log("the result of an operation is undefined!");
}

let callable: Function;
let anotherCallable: (a: number) => void = printNumber;

console.log(`Typeof another callback: ${typeof anotherCallable}`);

callable = printNumber;
console.log(callable);

callable(324);

combineAndPrintResult(12, -12, printNumber);

let userInput: unknown;
userInput = -124;
userInput = "hello";

function foo(): string {
  return "bar";
}

const userName: string = "Alexey@";
// userName = 'isnastish'; // cannot be assigned

function _add(a: number, b: number): number {
  var result: number;
  result = a + b;
  return result;
}

const addVar = (a: number, b: number): number => {
  return a + b;
};

// is equivalent to
const addVarShort = (a: number, b: number) => a + b;

console.log(addVar(4, 5));
console.log(addVarShort(7, -234));

const addMultiple = (method: "for" | "reduce", ...numbers: number[]) => {
  if (method === "reduce") {
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  } else if (method === "for") {
    let result: number = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  }
};

const arr: number[] = [123, 4, -2, 4, 57];

console.log(addMultiple("reduce", ...arr));
console.log(addMultiple("for", ...arr));


const [first, second, ...rest] = arr;
console.log(first + ", " + second);
console.log(rest);