function sumOfnNumbers(n){
    let totalSum = 0 ;
    for(let i = 0 ; i <= n ;i++){
        totalSum += i ;
    }
    console.log("Using the generic method :");
    console.log(totalSum);

    //can also use this logic to print the sum of n numbers
    console.log("Using the formula method :");
    console.log(n*(n+1)/2)

} 

sumOfnNumbers(9);
sumOfnNumbers(11);
sumOfnNumbers(10);
