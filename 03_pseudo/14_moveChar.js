// 
// input : angular , need output : ularang

function moveChar(str){
    let iteration  = 0;
    for(let i=0; i<3; i++){
        str = str + str[i];
        str=str.replace(str[i], "")
        iteration = i;
        console.log(i)
    }
    return iteration
}
moveChar('angular');