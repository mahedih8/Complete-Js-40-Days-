
1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

Answer: Output will be 'Bob'
Because: user = Bob is declare befor the inner function invoked.
Explain by GEC > {(CP: user = 'undefined', outer() = memory allocation(Yab34), 
(EP: user ='Alice', outer = execute)} > FEC{(for outer()) (CP: inner()= Zc3a4), user = undefined), (EP: user = 'Bob', inner = execute)}, FEC{(for inner()) (CP: , EP: console> 'Bob')}, here inner() will search user in it's same block, when there is none, it's trying to find user in outer block of it's own block and find it befor int's invoke. So it will print "Bob" and close inner(), after outer() there is nothing to execute, so it will be closed too. After all execution done in functional scope js engine will see nothing leaft to execute, 
user 'Alice' will not be printed , because it doesn't use any where.

2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

Answer: 1st mistake: Total variable in out of the function scope. 2nd mistake: console.log(total) out of the function scope.
***There is a big chance to pollute codes. Because by declaring total in globally, It will be able to use anywhere, but it contains the calculated result of an individual function.

3. Create a function with a nested function and log a variable from the parent function.

function parentFunc(){
    let name = 'Mahedi Hasan';
    function childFunc(){
        console.log(name);
    }
    childFunc();
}
parentFunc();

>> It will print 'Mahedi Hasan'. 

4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

Answer: No, Because all of variables are scoped in a functional scope.
In a loop sisuation, var can be used outside the code block, but the block also in a functional block. So it dosn't possible. It will give an error.

5. Write a function that tries to access a variable declared inside another function.

function outerFunc(){
    console.log(name);
    
    function innerChildFunc(){
        let name = 'Mahedi';
    }
    innerChildFunc();
}
outerFunc()

6. What will be the output and why?
console.log(a);
let a = 10;

Answer: It will give an Error. Because here console is trying to print a befor it's initialization.
GEC > CP: (a =undefined), EP: (console.log(undefined), a = 10), for let it will be blank / uninitialized
Here a = uninitialized till the using moment. 

7. Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);

Answer: C. It will cause an error. Because, It used globally witout declare in global scope.

***The age variable is accessible only inside of showAge function.***

8. What will be the output and explain the output?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}
outer();

Answer: The output will be "Hi", let's see what is happening in execution context.
GEC > (CP: message= undefined, outer() = Ya34b), (EP: message= 'Hello', outer()= execute),
FEC(for outer()) > (CP: message = undefined, inner()= X45ob), (EP: message= 'Hi', inner()= execute),
FER(for inner()) > (CP: , EP: console.log > Hi) // After inner execution it will back to the outer() to check is there any execution, if not left outer will finish too.
** Here only one time used message variable in inner function block, in execution it will search message in inner() block, if not, it will look forward to another block to find scope chain waise.

9. What will be the output and why?

let x = "Global";
function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}
outer();

Answer: Output will be "Inner" . Let's see what is happening in Execution context
GEC > {(CP: x= undefined, outer()= Ybc56), (EP: x= 'Global', outer()= execute)},
FEC(for outer()) > {(CP: x= undefined, inner()= C76v3), (EP: x= 'Outer', inner()= execute)},
FEC(for inner()) > {(CP: x= 'undefined'), (EP: x= 'Inner', console > 'Inner')};
Here output will be "Inner". Because x = "inner" is used to print in a same block. Js will easily find x= 'Inner' and print it.


10. What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

Answer: -1, -2
Explain: Here counter() wraps the inner anonymous function. 
count = o; count is used in an anonymous function and it returns a lower value of primary value, saves for next and also printing in console.

The main mechanism are count=0; and count--; , it will decrease 1 for once and remember the value for nex. For this it behaves like a loop.