
1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

Answer: 1, 2 Main reason is the closure behavior.

Closure: It is a one kind of inner / nested fucntion that can use / access the variable of it's outer function. Even the outer function is finished it's execution.

Here, in outer function count = 0. But when the closure(inner()) gets the count, it makes it count++, after that console prints the count++ value. So we can see first output is 1. 
For the 2nd time, inner() closes the value of count++ (because it's a closure) and update again with count++ condition. So we can see 2 in the 2nd output.

2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

Answer: 1st = 100, 2nd = 100, 3rd = 100 ...
Here, inner function is (anonymous) returns the value of (x * x), and also the calculation, So here inner behaves like a closure, but it's not yet. It dosn't save / remind a value of x, it returns all things from inside.
SO, it looks like a clouser, but not properly, it will give a regular output every time.

3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

Answe: click the button and tak a look at console.

4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
Answe: Tak a look at js file and also console.

5. What happens if a closure references an object?
Answer: (ii) The object remains in memory as long as the closure exists


6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

Answer: see at js file and also console.