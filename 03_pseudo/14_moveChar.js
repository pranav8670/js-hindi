function moveChar(str){
    let iteration  = 0;
    for(let i=0; i<3; i++){
        console.log(str)
        str = str + str[i];
        str=str.replace(str[i], "")
        iteration = i;
        console.log(i+1)
    }
    return iteration
}
moveChar('angular');