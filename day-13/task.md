1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
At the Global
Inside an Object Method
Inside the Satandalone non-Arrow Function
Inside an Arrow Function(standalone)
Inside an Arrow Function(as object method)
Inside an object created with the Constructor Function

ANSWER:

At the Global   >>   In the global scope, this will refer window object.
Inside an Object Method     >>   Here this will refer the object.
Inside the Satandalone non-Arrow Function      >>   Here this will refer the window object too. 
Inside an Arrow Function(standalone)   >>  Here this will refer the window object too.
Inside an Arrow Function(as object method)  >>  Here this will refer the window object too. ** Beacuse, here this will find the value in it's parent's scope not in where it lexically placed.

function constF(name, age){
    this.name = name;
    this.age = age;
}
let test = new constF('Maheedi', 26);
console.log(test);

Inside an object created with the Constructor Function      >>   Here this will refer the created object.

2. What is the problem here? Fix it to log the correct name and explain the fix
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};
user.greet();

// corrected version

const user = {
  name: "tapaScript",
  greet: function(){
    (() => {
    console.log(`Hello, ${this.name}!`);
  })();
  }
};
user.greet();

EXPLAIN: Main problem with the arrow function inside the method. Here it's refering user's parent scope(global), so this will try to find out the value of name from windo object. So it will be undefined or blank.
To solve, we need to place the arro function in a regular function to wrap it, by doing this, it will find the value of name in user and print as well.


3. Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();

// Corrected version

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet(); / obj.greet();
// greetFn();

Explain: Here greet is a function , so need to invoke it(obj.greet()) while refering(const greetFn = obj.greet;).
For the last line, greetFn is not a function, so we can't invoke it, we can print it by console.log(). For that we got an error for it. 


4. What is the problem with the following code? Why isn't it logging the name correctly?
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};
user.greet();

//Corrected version
const user2 = {
  name: "Alex",
  greet:function(){
    (()=>{
        return  console.log(`Hello, ${this.name}!`);
    })();
  }

};

user2.greet();

Explain: Here inner function invoked as a normal function. So here this will refer the window object and result will be undefined, to solve it, we need to keep "this" in an arrow function.



5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

function sportsConstF(name, players){
  this.name = name;
  this.players = players;
  console.log(`There are ${this.players} players to play this ${this.name} game.`);
}
let football = new sportsConstF('Football', 11);
let cricket = new sportsConstF('Cricket', 11);

6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

>>
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
  console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};
const car2 = {
  brand: "BMW",
  model: "X1",
};
car1.describe.call(car2);



7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

Options are:
C: "Charlie" and "" (empty string)
