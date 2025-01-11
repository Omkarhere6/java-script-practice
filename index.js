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




