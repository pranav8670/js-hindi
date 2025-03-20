// compress  
// ggggqqqqjkkklll      // g4q4j1k3l3

function compress(str){
    let compressStr = "";
    let count = 1;

    for(let i = 0; i<str.length; i ++){
        // if current index value == it's next index value that increase count
        if(str[i] === str[i+1]){
            count++;
        }
        // else add count with current index value in compressStr
        else{
            compressStr = compressStr + str[i] + count;
            count = 1;
        }
    }
    return compressStr;
}

console.log(compress("ggggqqqqjkkklll"));
