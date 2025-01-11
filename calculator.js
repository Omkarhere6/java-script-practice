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
