//The async and await syntax in javascript provide a way to write asynchronous code that looks and behave like synchronous code ,making it easier to read and mantaing.
//It builds on top of promises and alows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.

function setTimeoutPromisified(durationMS){
    return new Promise(function(resolve){
        setTimeout(resolve,durationMS);
    })
}

async function printAll(){
    await setTimeoutPromisified(1000);
    console.log("Hii");
    await setTimeoutPromisified(3000);
    console.log("Hellow")
    await setTimeoutPromisified(5000);
    console.log("Hellow There");
}

printAll();
