

// Day 9th 
// (40 days of Js) 
// TDZ and Hoisting task

// 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

{ // This is an area / code bolock

    // Temporal Dead Zone means a area or code block where we can to acces without initialize a variable.

    console.log(lastName);  // TDZ for lastName, myName, fullName starts from here.
    // some codes here      
    // some codes here

    let myName = 'Mahedi';  // TDZ for myName ends here.
    // some codes here
    // some codes here
    // some codes here
    console.log(myName);   // Here myName will be printed in console if we remove console.log(lastName); to clear TDZ upper myName,
    //  because it used after initialization

    // some codes here

    console.log(fullName); // Here fullName is used befor it initialization
    
    // some codes here
    // some codes here
    // some codes here
    
    let fullName = 'Mahedi Hasan';   // TDZ for fullName ends here.
    
    // some codes here
    // some codes here
    // some codes here
    let lastName = 'Hasan'; // TDZ for lastName ends here.
}


// 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

// Hoisting: Hoisting means creation a memory for a variable or a function during GEC and also FEC.
// When the memory creatin happens for a variable, it's called variable hoisting.
// When the memory creatin happens for a function, it's called functional hoisting.

// let's see.......

// variable hoisting **** (var, let, const) **************

console.log('My country name is',country); 
// It will print "My country name is undefined"
// GEC > (CP: country= undefined), (EP: country='Bangladesh')
// Because, country is used befor initialization and it will be initialized with undefined for var.
// After initialization it will print 'My country name is Bangladesh'
var country = 'Bangladesh';

console.log(capital, `is the capital of ${country}`);
// It won't be printed, because here capital is "uninitialized for let" in CP, Not undefined like var.
// GEC > (CP: capital= uninitialized / blank), (EP: capital='Dhaka')
// After initialization it will print 'Dhaka is the capital of Bangladesh'
let capital = 'Dhaka';

// const almost same as let

// functional hoisting
// In this hoisting we can use / invoke a function before

// both will be invoked without showing an error
testFun();
function testFun(){
    console.log(`Hello buddy🙂`);
} 
//Here GEC (CP: testFunc= memory allocation), (EP: testFunc= Execute) // No error
function testFun(){
    console.log(`Hello buddy🙂`);
}
testFun();
//Here GEC (CP: testFunc= memory allocation), (EP: testFunc= Execute) // No error


// Confusing

let testIt = function(){
    console.log(`It will be printed.`);
} 
testIt() // invoked after
//Here GEC (CP: runIt= undefined), (EP: runIt= function(){console.log('...')}, 
//  **HERE runIt initialized with a function (testIt === function, true)
// GEC > FEC (CP: ), (EP: testIt = Will print 'It will be printed.')
// for that it won't show any ERROR

runIt() // invoked befor
let runIt = function(){
    console.log(`It won't be printed.`);
} 
//Here GEC (CP: runIt= undefined), (EP: runIt=*** HERE THE VALUE IS A FUNCTION but defined as an undefined before, 
// so it will be compared with undefined.(runtIt === function, it's false))
// for that it shows an ERROR

