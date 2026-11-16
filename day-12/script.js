'use strict';

// ## 1. What will be the output and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// Answer: the output will be "Not provided", because of the "nullish coalesing operator", If left value is NULL / UNDEFINED, it will be print the right value.



// ## 2. What will happen if we try to modify a frozen object?

const obj = Object.freeze({ a: 1 });
// obj.a = 2;
console.log(obj.a);

// ANS: Here we can't modify a frozen object. Only able to use the existing keys. But in sealing process, we can modify existing key values but not able to add new key.


// ## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
// ANS:
const {name, company, city}=person;
console.log(name);
console.log(`Company name is ${company.name}`);
console.log(`Here address.city is UNDEFINED, WE can get it by 'company.location.city' and here it is ${company.location.city}`);


// ## 4. Build a Student Management System

// - Store student details in an object (name, age, grades).
// - Implement a method to calculate the average grade.

// ANS:

const studentInfo ={
    name: 'Mahedi',
    age: 26,
    grade: function(){
        let marks =[45,67,89,76,93,86];
        // Sum of all marks
        let totalMarks = 0;
        for(let m of marks){
            totalMarks +=m;
        }
        // Average mark
        let averageMark = Math.floor(totalMarks / marks.length);

        // setting grade

        let grade;
        if(averageMark >= 80){
            grade = 'A+';
        }
        else if(averageMark >= 70){
            grade = 'A-';
        }
        else if(averageMark >= 60){
            grade = 'B';
        }
        else if(averageMark >= 50){
            grade = 'B-';
        }
        else if(averageMark >= 40){
            grade = 'C';
        }
        else if(averageMark >= 33){
            grade = 'D';
        }
        else {
            grade = 'F';
        }

        console.log(`Total marks: ${totalMarks}`);
        console.log(`Average marks: ${averageMark}`);
        console.log(`${this.name}'s grade is: ${grade}`);
        return grade;
    }
}

// console.log(studentInfo);
studentInfo.grade();





// ## 5. Book Store Inventory System

// - Store books in an object.
// - Add functionality to check availability and restock books.




function bookInventory(){
    const books = {
        html:{
            name: 'Basic HTML',
            price: 500,
            stock: 10,

        },
        js:{
            name: 'Basic javaScript',
            price: 700,
            stock: 14,

        },
        python:{
            name: 'Basic Python',
            price: 300,
            stock: 8,

        }
    }

    // availability check
        function availabilityCheck(bookName){
            let capName = bookName.toLowerCase();
            let book = books[capName];
            if(!book){
                return `${capName} is not found!`;
            }else if(book.stock >0){
                return `${capName} is available. Stock: ${book.stock}.`;
            }else{
                return `${capName} is out of stock`;
            }
        }

    // restock
   function restocking(bookName, quantity){
    let capName = bookName.toLowerCase();
    let book = books[capName];
    // console.log(book);
    if(!book){
        return `${book} is not found!`;
    }else if(quantity <0 || !Number.isInteger(quantity) ){
        return `Invalid quantity.`;
    }else{
        book.stock += quantity;
        return `${capName} is successfully restocked, Current stock is: ${book.stock}`;
    }
   }
    // status check
   return{
    restocking,
    availabilityCheck
   }
}
let runTest = bookInventory();
console.log(runTest.restocking('html', 26));
console.log(runTest.availabilityCheck('js'));




// ## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

// ANS: 
let obJ = {
    name: 'Mahedi',
    age: 26,
}
let test1 = Object.entries(obJ);
//  ['name', 'Mahedi'], ['age', 26]
let test2 = Object.keys(obJ); 
//  ['name', 'Mahedi'], ['age', 26]

// The main difference - 
// Object.entries() > it will create individual array of each property with value.
// Object.keys() > it will create an array with property only.






// ## 7. How do you check if an object has a certain property? 

// Ans: I will use,
// in operator('property' in object),
// hasOwnProperty() > (object.hasOwnProperty('property'))

// ## 8. What will be the output and why?

const person3 = { name: "John" };
const newPerson = person3;
newPerson.name = "Doe";
console.log(person3.name);

// Ans: Here output will be 'Jhon', because of assigning value in mutable way. So that newPerson(new one) variable wiil be use same memory location.

// ## 9. What’s the best way to deeply copy a nested object? Expalin with examples

// ## 10. Loop and print values using Object destructuiring                                                                   

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

// ANS 
for(const {name, address, age} of users){
    console.log(name, address, age);
}