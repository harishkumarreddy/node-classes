/**
 * heighr order function
 *  - map
 *  - filter
 *  - reduce
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
// map
// var arr2 = arr.map(function (i) {
//     return i ** i;
// });

var arr2 = arr.map(i => i ** i);

console.log(arr2);

// filter
var arr3 = arr.filter(function (i) {
    return i % 2 == 1;
});
console.log(arr3);

// reduce
var arr4 = arr.reduce(function (a, b) {
    return a + b;
});
console.log(arr4);

// forEach
var arr5 = [];
arr.forEach(function (i) {
    arr5.push(arr[i]);
});
console.log(arr5);