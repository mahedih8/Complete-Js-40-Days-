
// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

let buttonSelect = document.querySelector('button');

function clouserTestWithButton(){
    let clickCount = 0;
    
    function innerClick(){
        clickCount ++;
        console.log(`You clicked ${clickCount} ${clickCount === 1? 'time':'times'} 😀`);
    };
    return innerClick;
}
buttonSelect.addEventListener('click',clouserTestWithButton());


// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier){
    let count = 0;
    return function multiplyF(){
        count++;
        console.log(`Multiplication of ${multiplier} is ${count*multiplier}`);
    }
}
const runIt = createMultiplier(5);
console.log(runIt());
console.log(runIt());
console.log(runIt());
console.log(runIt());



// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function funcFactory(initialCount){
    let count = initialCount;

    return{
        increment: ()=>{
            count++;
            console.log(`It's incrementing ${count}`);
        },
        decrement: ()=>{
            count--;
            console.log(`It's deccrementing ${count}`);
            
        },
        reset: ()=>{
            count = 0;
            console.log(`It's reset ${count}`);

        }
    }
}

const testFuncFactory =  funcFactory(0);
console.log(testFuncFactory.increment());
console.log(testFuncFactory.increment());
console.log(testFuncFactory.decrement());
console.log(testFuncFactory.reset());