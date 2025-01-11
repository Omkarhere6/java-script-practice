function cummulativeSum(){
    let totalSum = 0 ;
    let numberList = [ 1,2,3,4,5,6,7,8,9] ;

    for(let i = 0 ; i < numberList.length ;i++){
        totalSum += numberList[i];
    }

    console.log(totalSum);
}

cummulativeSum();