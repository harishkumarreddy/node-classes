/**
 * Arrays:
 * Array / List / Collection
 * Objects
 */

// Array
var userData = [
    "Johnson", 
    25, 
    1234567890, 
    "Main Street, New York"
];

console.log(userData);
console.log("Name:" + userData[0]);
console.log("Phone:" + userData[2]);

userData[2] = 7801070710;
console.log("Phone:" + userData[2]);

// Array functions
userData.push("Joneson@email.com");
console.log(userData);
userData.unshift(1);
console.log(userData);
var poppedVal = userData.pop();
console.log(userData);
console.log("Popped Value: " + poppedVal);
var shiftedVal = userData.shift();
console.log(userData);
console.log("Shifted Value: " + shiftedVal);
// delete userData[2];
// console.log(userData);
// console.log(userData[2]);
var slicedData = userData.slice(1, 3);
console.log(userData);
console.log("slicedData: " + slicedData);
var spliced = userData.splice(1, 3)
console.log(userData);
console.log("spliced: " + spliced);

