// array destructure

const arr = [1, 20, 300, 4000, 50000, 600000];

// without destructure
// create new variable 'x' with the third value of above array
let x = arr[2];

// create new variable 'y' with the fifth value of above array
let y = arr[4];

// destructuring of array elements
// create new variable 'z' with the first value of above array
// const z = arr[0]; // without destructuring

// array destructuring involves '[]' on the left hand side
const [z] = arr; // [z] = [1, 20, 30, 4000, 50000, 600000]
console.log(z);

// create new variable p, q, r with the second, fourth, sixth value of above array
const [, p, , q, , r] = arr; // [, p, , q, , r] = [1, 20, 300, 4000, 50000, 600000];

console.log("p", p);
console.log("q", q);
console.log("r", r);

// default values when the index postion is not found
// create new variable 'h' with the 10 value of above array 'arr'
const [, , , , , , , , , h] = arr;

console.log(h); // undefined because no default value

// incase of an undefined we use default values
const [, , , , , , , , , j = 400] = arr;

console.log(j);
