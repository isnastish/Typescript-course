export function moveElementToEnd(array: number[], toMove: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      for (let k = array.length - 1; k >= i; k--) {
        if (array[k] !== toMove) {
            let tmp = array[k];
            array[k] = array[i];
            array[i] = tmp;
            break;
        }
      }
    }
  }
  return array;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

console.log(moveElementToEnd(array, toMove));
