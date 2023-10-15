const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = [];

for (let val of arr) {
  arr2.push(val);
}

// arr2 get the values from arr but will be a new reference array

// Spreading
// Same as above using ...
const arr3 = [...arr]; // spreading

// Old reference array is spreaded and a new reference array is returned

const arr4 = [...arr, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const arr5 = [-5, -4, -3, -2, -1, 0, ...arr, 11, 12, 13];

const tempArr = [-5, -4, -3, -2, -1, 0];
const arr6 = [...tempArr, ...arr];

// Object Spreading

const obj = {
  name: "SAM",
  role: "developer",
  skill: ["JS", "Python", "Java"],
};

const obj2 = obj; // Old reference will be passed

const obj3 = { ...obj }; // New Object reference will be passed

const obj4 = { ...obj, degree: "BE/BTech", designation: "Software Engineer" };

const tempObj = { ...arr };
// Object reference with indexes as keys
