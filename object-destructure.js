// Object destructuring
// key is used to destructure an object

const obj = {
  fname: "Sam",
  lname: "Curran",
  country: "United Kingdom",
  type: "All-Rounder",
};

// without destructuring
// creata a new variable 'country' with the country value of above object
// let country = obj["country"];

// with destructuring
const { country } = obj; // { country } = { fname: 'Sam', lname: 'Curran', country: 'United Kingdom', type: 'All-rounder' }

console.log(country);

// create a new variable 'type' with the type value of above object
const { type } = obj; // { type } = { type: 'All-rounder' }
console.log(type);

// can also be done in one line
// const { country, type } = obj; // { country, type } = { country: 'United Kingdom', type: 'All-rounder' }
// console.log(country);
// console.log(type);

// default value
const { age } = obj;
console.log(age); // undefined if not age is present in the object

const { age = 23 } = obj;
console.log(age); // default value will 25 if age is not present in the object

const { age = 23 } = { ...obj, age: 100 };
console.log(age);

// variable name changing
// create a new variable called 'origin' with the country value of the above obj
// const origin = obj.country; // without destructuring

const { country: origin } = obj; // { country: origin } = {  country: 'United Kingdom'}

// only origin can be used as a variable not the country
console.log(origin);
