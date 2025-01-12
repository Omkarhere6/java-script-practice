
const fs = require("fs");

const content = fs.readFileSync("textFile.txt","utf-8");
console.log(content);

fs.writeFileSync("textFile.txt","new file added to the file");

const content1 = fs.readFileSync("textFile.txt","utf-8");
console.log(content1);