export function nonConstructibleChange(coins: number[]) {
  if (coins.length === 1) {
    if (coins[0] === 1) {
      return 2;
    }
    return 1;
  }

  // sort input array
  coins.sort((a, b) => a - b);

  let curChange: number = 1;
  let tmpArray: number[] = [];

  for (let i = 0; i < coins.length; i++) {
    console.log(`index: ${i}`);

    const num = coins[i];
    if (num === curChange) {
      console.log(`Element ${curChange} exists`);
      curChange++;
      i = 0; // will be incremented the next itration
      tmpArray = [];
    } else if (num < curChange) {
      tmpArray.push(num);
    } else {
      // process tmp array
      tmpArray.sort((a, b) => a - b);
      console.log(`Current array: ${tmpArray}, curChange: ${curChange}`);

      let foundCurChange: boolean = false;
      for (let k = 0; k < tmpArray.length && !foundCurChange; k++) {
        for (let j = k + 1; j < tmpArray.length; j++) {
          if (tmpArray[k] + tmpArray[j] === curChange) {
            foundCurChange = true;
            break;
          }
        }
      }

      if (!foundCurChange) {
        return curChange;
      }

      curChange++;
      tmpArray = [];
    }
  }

  return 1;
}

const coins: number[] = [5, 7, 1, 1, 2, 3, 22];

console.log(nonConstructibleChange(coins));
