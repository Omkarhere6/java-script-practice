// This is a example for functional aurguments means that we pas the function name as the aurgument

function sum(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}

function dofunction(a,b,op){
    return op(a,b);
}

console.log(dofunction(5,5,sum));

console.log(dofunction(25,5,substract));

console.log(dofunction(30,5,divide));

console.log(dofunction(60,5,multiply));
