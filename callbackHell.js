//Problem statemenet 
//Write a program that will print the 'Hii' after 1 second , 'Hellow' after 3 seconds and 'Hellow There'after 5 seconds
//expected output:
//Hii
//Hellow
//Hellow There


// The following solution has the callback hell and is synchronous

setTimeout(function(){
    console.log('Hii');
    setTimeout(function(){
        console.log('Hellow');
        setTimeout(function(){
            console.log('Hellow There');
        },5000);
    },3000);
},1000);

//Disadvantages the code will be not formatted and will look ugly 

// if we want to avoid this and write the code synchronously without using promise we can still do that like the below function


function printHii(){
    console.log('Hii')
    setTimeout(printHellow,3000);
}

function printHellow(){
    console.log('Hellow')
    setTimeout(printHellowThere,5000);
}

function printHellowThere(){
    console.log('Hellow There');
}

setTimeout(printHii,1000);


//To write the similar code using the promises 

//Create a promisified version of setTimeout function

function setTimeOutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}

setTimeOutPromisified(1000).then(function(){
    console.log("Hii");
    setTimeOutPromisified(3000).then(function(){
        console.log("Hellow");
        setTimeOutPromisified(5000).then(function(){
            console.log("Hellow There");
        });
    });
});

// We can also do the promise chaining to make the code look better

setTimeOutPromisified(1000).then(function(){
    console.log("Hii");
    return setTimeOutPromisified(3000);
}).then(function(){
    console.log("Hellow");
    return setTimeOutPromisified(5000);
}).then(function(){
    console.log("Hellow There");
});
