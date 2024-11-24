export function twoNumberSum(array: number[], targetSum: number) {
  for (let i = 0; i < array.length; i++) {
    let num: number = array[i];
    for (let k = i + 1; k < array.length; k++) {
      let sum = num + array[k];
      if (sum === targetSum) {
        return [num, array[k]];
      }
    }
  }
  return [];
}

const array: number[] = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

console.log(twoNumberSum(array, targetSum));
