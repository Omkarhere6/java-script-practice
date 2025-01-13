//Promise class gives you a promise that it will return you something in the future
//we can also use the callback to do the work that is done by promises but promises are the cleaner way to do the promises.
//Defining on promises is hard and using one is easy!!!!!


//A promise in javascript is an object that represents the eventual completion(or faliure) of an asynchronous operation and its resulting value.

//Promises are more effective than the traditional callback funtions 
//promises provide more claner and more managable way to deal with code that executes asynchronously ,such as API class,file I/O or timers


//Below example using the callback version

//funtion 
function PrintName(){
    console.log("Omkar");
}

setTimeout(PrintName,1500); //example of the callback function


//Below example using the promise version  of the settimeout function

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
} 

function callBackExample(){
    console.log("This is th callaback function execution");
} 

setTimeoutPromisified(1000).then(callBackExample);


//Below is the example of then promised fied version of the reading from the text file

const fs = require("fs");

function readfile(){
    return new Promise(readfilecontents);
}

function readfilecontents(printContents){
    fs.readFile("textFile.txt","utf-8",function(err,contents){
           return printContents(contents) 
    });
}

const promiseObject = readfile();

function printContents(content){
    console.log(content);
}
 
promiseObject.then(printContents)
