function div(a, b){
    if (b == 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}


try {
    var x = div(5, 0);
} catch (error) {
    x = 0;
    console.log("Error: " + error.message);
}


console.log(x);