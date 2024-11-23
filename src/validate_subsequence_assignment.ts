export function isValidSubsequence(array: number[], sequence: number[]) {
  // second array should be a subsequence of the first one
  const totalElements = sequence.length;
  let matchedCount = 0;
  let start = 0;

  console.log("totalElements: ", totalElements);

  if (array.length < sequence.length) {
    return false;
  }

  for (let i = 0; i < sequence.length; i++) {
    for (let k = start; k < array.length; k++) {
      if (sequence[i] == array[k]) {
        matchedCount++;
        start = k + 1;
        break;
      }
    }
  }

  if (matchedCount === totalElements) {
    return true;
  }

  return false;
}

const array: number[] = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence: number[] = [1, 6, -1, 10];

let isValid: boolean = isValidSubsequence(array, sequence);
if (isValid) {
  console.log("Is Valid!");
}