// distinct and duplicate values of array

function duplicate(arr){
    let duplicate = [];
    let exist = [];
    
    for(let num of arr){
        if(exist.includes(num)){
            duplicate.push(num);
        }else{
            exist.push(num);
        }
    }
    console.log(duplicate);
    console.log(exist);
}


arr = [12,32,3,4324,54,5456,56,23,42,413,13,14,32,3,4324,54];
console.log(duplicate(arr));