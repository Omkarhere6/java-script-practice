function setTimeOutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}



function printName(){
    console.log("The name is printed in the function");
}

setTimeOutPromisified(3000).then(printName);