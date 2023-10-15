// Get all the Countries Details using
// https://restcountries.com/v3.1/all

// Step 1: Creation of an xmlhttprequest object
const xhr = new XMLHttpRequest();
// With above object we can talk with internet server

// Step 2: Config the above object with info about internet communication
xhr.open("GET", "https://restcountries.com/v3.1/all");

// Step 3: Sending the request to the internet server
xhr.send();

// Step 4: Handling the response
xhr.onload = function () {
  console.log(xhr.responseText);
};
