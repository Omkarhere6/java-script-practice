const fs = require("fs");

function readFromTextFile(){
    return new Promise(function(resolve,reject){
        fs.readFile("textFileaa.txt","utf-8",function(err,content){
            if(err){
                reject("File not found");
            }else{
                resolve(content);
            }
        })
    });
}

readFromTextFile().then(function(data){
    console.log("File has been Read");
    console.log(data);
}).catch(function(er){
    console.log(er)
});