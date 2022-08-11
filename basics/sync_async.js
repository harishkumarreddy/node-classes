
// // function getsum(a, b) {
// //     setTimeout(function() {
// //         return a + b;
// //     }, 1000);
// // }

// var getsum = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         var a=5; 
//         var b = 5;
//         if(typeof a === 'number' && typeof b === 'number') {
//             resolve(5 + 5);
//         }else{
//             reject('Invalid input');
//         }
//     }, 1000);
// });

// console.log("1");

// getsum.then((r)=>{
//     console.log("2");
// }).catch(e =>{
//     console.log(e);
// });

// console.log("3");

function getsum(a, b) {
     setTimeout(function() {
        return a + b;
    }, 1000);
}

async function res(a, b) {
    console.log(await getsum(a, b));
}
console.log("1");
res(5, 5);
console.log("3");