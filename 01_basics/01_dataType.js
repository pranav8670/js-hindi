// Data Type -data ko kis tarike se memory me store kiya jata hain aur kis type se access kiya jata hain
//  us base pe iske 2 type decide kiye gye hain..

//  1) Primitive and 2) non-Primitive (referance type)

// 1) Primitive Datatype
    //   - String, Boolean, number, null, undefined, symbol, BigInt

    // Primitive DataType me Stack memory use hoti hian

    // Stack memory ek ke upper ek rakhi jati hain aur orignal value ki copy provide ki jati hain,
    // na ki use memory se replace kiya jata hain


// 2) Non-Primitive
    //   - Array, Object, function

    // Non-Primitive DataType me Heap memory use hoti hian

    // Heap momory ek container ke under hoti hain isme orignal value ko hi change or modified kiya jata hain
    // aur purani value ko store nhi kiya jata.
    

// typeOf operators results :
   // https://262.ecma-international.org/5.1/#sec-11.4.3    


// String Interpolation   

let userName = "ram";
let userScore = 60;

console.log(`my name is ${userName} and score is ${userScore}`);

// yaad rhe variable ko ${} ke under hi rkhna hain with outside back ticks

// #################################################################################################

// How to declare String 

let myName = "pranav";                   // 1st syntax to declare
let myAltName = new String('Harshal');   // 2ns syntax to declare   // paste this to browser consle and
                                                      
console.log(typeof(myName));        // string
console.log(typeof(myAltName));     // object

console.log(myName);        // pranav
console.log(myAltName);     // [String: 'Harshal']

console.log(myName.length);        // pranav
console.log(myAltName.length);     // [String: 'Harshal']

