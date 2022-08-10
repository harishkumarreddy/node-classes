/**
 * Functions: Functions are the building blocks of any program.
 *  - function 
 *  - arrow function
 *  - callback
 *  - higher order function
 *  -- map
 *  -- filter
 *  -- reduce
 *  -- forEach
 *  - recursion
 *  - closer

 */

// function sayHello(){
//     console.log("Hello World");
// }
// sayHello();

//void type function
function sayHello(name){
    console.log("Hello " + name);
}

sayHello("John");
sayHello("Jane");
sayHello("Jack");

// return type function
function add(a,b){
    return a+b;
}

console.log(add(10,20));
var output = add(50,20);
console.log(output);

// Closure
const sum = function(a,b){
    return a+b;
};

console.log(sum(10,20));
var output = sum(50,20);
console.log(output);

// Arrow function
const sum1 = (a,b) => {
    return a+b;
}

// Advanced usecase of closer
// req: call afunction like sum(10)(20)
const sum2 = function (a){
    a = a * a;
    return function(b){
        return a**b;
    }
}

console.log(sum2(10)(20));
var output = sum2(50)(20);
console.log(output);

