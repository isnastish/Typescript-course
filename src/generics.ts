const names: Array<string> = ["Alexey", "Martin"];
names[0] = names[0].toUpperCase();
names[1].split(" ");
console.log(`Names: ${names}`);

const numArray: Array<number> = [12, 234, -344];
console.log(numArray);

let startTime: DOMHighResTimeStamp = performance.now();

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ended");
  }, 2000);
});

const yieldingNumberPromise: Promise<number> = new Promise(
  (resolve, reject) => {
    // sleep for 3seconds
    setTimeout(() => {
      resolve(-1234);
    }, 3000);
  }
);

promise.then((data) => {
  let result = data.toUpperCase();
  console.log(result);
});

yieldingNumberPromise.then((data) => {
  console.log(data.toString(10));
});

let endTime = performance.now();
let elapsedTime = endTime - startTime;

// will be 0 since is executed before the Promise resolves
console.log(`Elapsed time: ${Math.round(elapsedTime / 1000)}`);

/////////////////////////////////////////////////////////////////////
// Generic functions

function mergeObjects(a: object, b: object) {
  return Object.assign(a, b);
}

// type cast
const target = mergeObjects(
  { fistName: "Alexey" },
  { lastName: "Yevtusneko", age: 24 }
) as { firstName: string; lastName: string; age: number };

console.log(target);

// A better way of doing that would be
function mergeObjectsGeneric<T extends {}, U>(a: T, b: U): T & U {
  return Object.assign(a, b);
}

const target2 = mergeObjectsGeneric({ name: "Alexey" }, { age: 24 });
console.log(`Name: ${target2.name}, ${target2.age}`);
