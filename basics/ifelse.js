/**
 * Conditional Statements:
 * if..
 * if..else, 
 * if...else if...else, 
 * Nested if..else
 * switch
 */

var x = 10;

// if(x != null){
//     console.log("x is:" + x);
// }

// if(x != null){
//     console.log("x is:" + x);
// } else {
//     console.log("x is null");
// }


// x = null;
// if(typeof x === "number"){
//     console.log("x is:" + x);
//     console.log("type is:" + (typeof x));
// } else if(typeof(x) === "string"){
//     console.log("x is a string, expected a number");
// }else{
//     console.log("x is null");
// }

// x = "3";
// if(typeof x === "number"){
//     var r = x % 2;
//     if(r === 0 ){
//         console.log("x is even");
//     }else{
//         console.log("x is odd");
//     }
// } else {
//     console.log("X is not a number");
// }

x = "50X";
switch (typeof x) {
    case "10X":
        console.log("x is WebSocket success code");
        break;
    case "20X":
        console.log("x is weresponse success code");
        break;
    case "30X":
        console.log("x is weresponse Notmodified/Redirected code");
        break;
    case "40X":
        console.log("x is WEB URL/Rout is not found code");
        break;
    case "50X":
        console.log("x is Serverside error code");
        break;
    default:
        console.log("x: " + (typeof x));
        console.log("x Unknown code");
        break;
}

console.log("Finished");