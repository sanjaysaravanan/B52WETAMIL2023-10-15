const arr = [6, 7, 8, 1, 2, 3, 4, 5, 9, 9, 11, 2, 3, 4, 5, 4];

// Print the number which repeated most

const freqObj = {};

for (let value of arr) {
  if (freqObj[value] !== undefined) {
    freqObj[value] = freqObj[value] + 1;
  } else {
    freqObj[value] = 1;
  }
}

console.log(freqObj);

let maxFreq = 0;
let maxFreqVal = null;

for (let key in freqObj) {
  if (freqObj[key] > maxFreq) {
    maxFreq = freqObj[key];
    maxFreqVal = key;
  }
}

console.log("Number", maxFreqVal, "has occured", maxFreq);

let minFreq = freqObj[arr[0]];
let minFreqVal = arr[0];

for (let key in freqObj) {
  if (freqObj[key] < minFreq) {
    minFreq = freqObj[key];
    minFreqVal = key;
  }
}

console.log("Number", minFreqVal, "has occured", minFreq);

const lowFreqNums = [];
let index = 0;
for (let key in freqObj) {
  if (freqObj[key] === minFreq) {
    lowFreqNums[index] = key;
    index = index + 1;
  }
}

function bubbleSort(arr, n) {
  let i, j, temp;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(lowFreqNums, lowFreqNums.length);

console.log(lowFreqNums);
