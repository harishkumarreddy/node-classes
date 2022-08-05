/**
 * Objects:
 * Object / Dictionary / Map
 * 
 * JSON: JavaScript Object Notation
 */

var user = {
    name: "Johnson",
    age: 25,
    phno: 1234567890,
    address: "Main Street, New York"
};

console.log(user);
console.log("Name:" + user.name);
console.log("Phone:" + user['phno']);

user.phno = 7801070710;
console.log("Phone:" + user.phno);

user.email = "Jonson@email.com";
console.log(user);

// Object functions
console.log("Keys: " + Object.keys(user));
console.log("Keys: " + Object.values(user));