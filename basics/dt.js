/**
 * Data Types in JavaScript:
 * 1. Primitive Data Types
 *   a. Number
 *   b. String
 *   c. Boolean
 *   d. Undefined -> value not assigned
 *   e. Null -> value assigned
 * 
 * 2. Non-Primitive Data Types
 *  a. Object
 *  b. Array
 * 
 */

var age = 25; // Number
var height = 5.5; // Number
var weight = 65.5; // Number
var phno = 1234567890; // Number

var userName = "Johnson"; // String
var address = "123, Main Street, New York"; // String
var email = "john@gmail.com"; // String
var phno2 = "+91-1234567890"; // String

var isMarried = true; // Boolean
var isEmployed = false; // Boolean

var isNull = null; // Null
var isUndefined = undefined; // Undefined

// Concatenation
console.log("Age: " + age);
console.log(height + weight);

// type casting
console.log(height.toString() + weight.toString());
console.log(typeof(height));
console.log(typeof(height.toString()));

// string functions
console.log("userName: " + userName);
console.log("length: " + userName.length);
console.log("to Uppercase: " + userName.toUpperCase());
console.log("toLowerCase: " + userName.toLowerCase());
console.log("charAt: " + userName.charAt(0));
console.log("indexOf: " + userName.indexOf("o"));
console.log("substring: " + userName.substring(0, 2));
console.log("split: " + userName.split(""));
console.log("split: " + userName.split("o"));