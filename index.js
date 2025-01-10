var NameString = "My name is omkar";
console.log(NameString);

let list = ["omkar","somename2",2,5,new Date()]

for(var i = 0; i < list.length ; i++){
    console.log(list[i]);
}

let personeldetails = { 
    FirstName : "Omkar",
    LastName : "Hawaldar",
    gender:"Male",
    age:24,
    phone:84318555551,
    qualification:"Btech",
    designation:"Software developer",
    address : {
        permenantAddress : "Managlwar peth",
        permenantAddressPin : 587311,
        CurrentAddress:"Belgavi",
        CurrentAddressPin:590001,
    },
    familyDetails:{
        parentsDetails:{
            FathersName:"Kadappa",
            MothersName:"Vidya",
            FathersPhone:8724556323,
            MopthersPhone:8435484251,
        },
        sibilingsDetails:{
            Name:"Trupti",
            gender:"Female",
            age:25
        } 
    }
};

for (let key in personeldetails) {
    if (typeof personeldetails[key] === 'object') {
        console.log(key + ":");
        for (let subKey in personeldetails[key]) {
            if (typeof personeldetails[key][subKey] === 'object') {
                console.log("  " + subKey + ":");
                for (let nestedKey in personeldetails[key][subKey]) {
                    console.log("    " + nestedKey + ": " + personeldetails[key][subKey][nestedKey]);
                }
            } else {
                console.log("  " + subKey + ": " + personeldetails[key][subKey]);
            }
        }
    } else {
        console.log(key + ": " + personeldetails[key]);
    }
}


function calculator(a,b,operation){
    switch (operation){
        case "sum":
            let sum = a+b ;
            console.log("The sum of two number is " + sum);
        case "substraction":
            let substratction = a - b;
            console.log("The substraction of two number is " + substratction);
        case "multiply":
            let multiplication = a * b;
            console.log("The multiplication of two number is " + multiplication);   
        case "division":
            let division = a / b ;
            console.log("The division of two number is " + division); 
    }
}

calculator(5,10,"sum");
calculator(5,10,"substraction");
calculator(5,10,"multiply");
calculator(5,10,"division");


function checkTheEvenNumber(number){
    if(number == 0){
        console.log("The number is nither even or odd");
    }else if(number % 2 == 0){
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }
}

checkTheEvenNumber(5);
checkTheEvenNumber(4);