function checkNumberIsPrime(number){
    let flag = false;
    if(number == 0 || number == 1){
        console.log("The number is not a prime number");
    }else if(number > 1){
        for(let i = 2 ; i < number ;i++){
            if (number % i == 0){
                flag = true ;
            }
        }
    }

    if (flag){
        console.log("The number is a prime number");
    }else{
        console.log("The number is not a prime number");
    }
}

checkNumberIsPrime(5);
checkNumberIsPrime(9);