/**
 * Loops:
 * 1. for
 * 2. while
 * 3. do..while**
 * 4. for..in
 * 5. for..of
 * 6. forEach
 * 
 */

// print a math table
var num = 25;
var times = 15;
var start = 15;
// // syntax: for(initialization; condition; increment/decrement)
// // for(var i=0; i<=10; i++){
// // for(var i=0; i<=times; i++){
// for(var i=start; i<=times; i++){
//     // 5 * 1 = 5
//     console.log(num + " x " + i + " = " + (num * i));
// }


// reverse a string
// var msg = "Hello World";
// var revMsg = "";

// // for(var i = 0; i < msg.length; i++){
// for(var i = msg.length; i >= 0; i--){
//     revMsg += msg.charAt(i);
// }

// console.log("msg: " + msg);
// console.log("Output: " + revMsg);


// var flag = true;
// while (flag === true){
//     console.log("Hello World");
//     flag = false;
// }

// var flag = true;
// var progress = 0;
// while (flag === true){
//     console.log("Progress: " + progress +"%");
//     progress++;
//     if(progress > 100){
//         flag = false;
//     }
// }

var flag = true;
setTimeout(()=>{
    flag = false;
    console.log("Flag: " + flag);
}, 10);

// while (flag === true){
//     console.log("Time: " + new Date());
// }

do{
    console.log("Hello World");
}while(flag === true);
