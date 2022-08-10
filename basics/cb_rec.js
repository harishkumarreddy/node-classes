// Recursive function to call themself.
function f (n) {
    console.log(n);
    if (n == 0) return 1;
    return n * f(n-1);
}
// console.log(f(5));

// Colback function
// function f1 (n, callback) {
//     console.log(n);
//     n = n % 2;
//     return callback(n-1);
// }

// console.log(f1(5, f));

function a(i, callback) {
    i += i;
    return callback(i);
}

var x = a(5, function (i) {
    return i*i;
});

console.log(x);
