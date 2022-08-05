/**
 * Operators:
 * 1. Assignment operators (=, +=, -=, *=, /=, %=)
 * 2. Arithmetic operators (+, -, *, /, %, ++, --)
 * 3. Comparison operators (==, ===, !=, !==, >, <, >=, <=)
 * 4. Logical operators (&&, ||, !)
 *     true && true = true
 *     true && false = false
 *     false && true = false
 *     false && false = false   
 *     true || true = true
 *     true || false = true
 *     false || true = true 
 *     false || false = false
 *    !true = false
 *    !false = true
 * 5. Bitwise operators** (<<, >>, >>>, &, |, ^, ~)
 * ex: 5 = 00000101
 *     3 = 00000011
 *    5 & 3 = 00000001 = 1
 *    5 | 3 = 00000111 = 7
 *    5 ^ 3 = 00000110 = 6
 *    ~5 = 11111010 = -6
 * 
 *  binary: 0000 0000 1111 1111 0101 0101
 *  0000 : 0
 * 0001 : 1
 * 0010 : 2
 * 0011 : 3
 * 0100 : 4
 * 0101 : 5
 * 0110 : 6
 * 0111 : 7
 * 1000 : 8
 * 1001 : 9
 * 1010 : 10
 * 1011 : 11
 * 1100 : 12
 * 1101 : 13
 * 1110 : 14
 * 1111 : 15
 * 
 */

// Assignment operators
console.log("::Assignment operators::");
var a = 10;
console.log("a: " + a);
a += 5; // a = a + 5
console.log("a: " + a);
a -= 5; // a = a - 5
console.log("a: " + a);
a *= 5; // a = a * 5
console.log("a: " + a);
a /= 5; // a = a / 5
console.log("a: " + a);
a %= 3; // a = a % 5
console.log("a: " + a);

// Arithmetic operators
console.log("::Arithmetic operators::");
var b = 10;
var c = 5;
console.log("b: " + b);
console.log("c: " + c);
console.log("b + c: " + (b + c));
console.log("b - c: " + (b - c));
console.log("b * c: " + (b * c));
console.log("b / c: " + (b / c));
console.log("b % c: " + (b % c));
b++; // b = b + 1
console.log("b++: " + b);
b--; // b = b - 1
console.log("b--: " + b);

// Comparison operators
console.log("::Comparison operators::");
a = 10;
b = 10;
c = "10";
console.log("a: " + a, typeof(a));
console.log("b: " + b, typeof(b));
console.log("c: " + c, typeof(c));
console.log("a == b: " + (a == b));
console.log("a === b: " + (a === b));
console.log("a == c: " + (a == c));
console.log("a === c: " + (a === c));
console.log("a != b: " + (a != b));
console.log("a !== b: " + (a !== b));
console.log("a != c: " + (a != c));
console.log("a !== c: " + (a !== c));
console.log("a > b: " + (a > b));
console.log("a < b: " + (a < b));
console.log("a >= b: " + (a >= b));
console.log("a <= b: " + (a <= b));
console.log("A" === "a");

// Logical operators
console.log("::Logical operators::");
console.log("true && true: " + (true && true));
console.log("true && true: " + (a==b && a==c));
console.log("true && false: " + (true && false));
console.log("true && false: " + (a===b && a===c));
console.log("true || true: " + (true || true));
console.log("true || true: " + (a==b || a==c));
console.log("true || false: " + (true || false));
console.log("true || false: " + (a===b || a===c));
console.log("!False: " + (a!==c));
console.log("!True: " + (a!==b));

